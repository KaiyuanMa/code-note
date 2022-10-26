const axios = require("axios");

//GET
const apiGetFolder = (folderId) => {
  return axios.get(`/api/folder/${folderId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//DELETE
const apiDeleteFolder = (folderId) => {
  return axios.delete(`/api/folder/${folderId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//POST
const apiAddFolder = (folder) => {
  return axios.post("/api/folder", folder, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//PUT
const apiUpdateFolder = (folderId, params) => {
  return axios.put(`/api/folder/${folderId}`, params, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

export { apiGetFolder, apiDeleteFolder, apiAddFolder, apiUpdateFolder };

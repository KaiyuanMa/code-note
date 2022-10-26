const axios = require("axios");

//GET
const apiGetCode = (codeId) => {
  return axios.get(`/api/code/${codeId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//DELETE
const apiDeleteCode = (codeId) => {
  return axios.delete(`/api/code/${codeId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//POST
const apiAddCode = (code) => {
  return axios.post("/api/code", code, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//PUT
const apiUpdateCode = (codeId, params) => {
  return axios.put(`/api/code/${codeId}`, params, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

export { apiGetCode, apiDeleteCode, apiAddCode, apiUpdateCode };

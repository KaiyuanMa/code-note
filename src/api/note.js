const axios = require("axios");

//GET
const apiGetNote = (noteId) => {
  return axios.get(`/api/note/${noteId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//DELETE
const apiDeleteNote = (noteId) => {
  return axios.delete(`/api/note/${noteId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//POST
const apiAddNote = (note) => {
  return axios.post("/api/note", note, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//PUT
const apiUpdateNote = (noteId, params) => {
  return axios.put(`/api/note/${noteId}`, params, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

export { apiGetNote, apiDeleteNote, apiAddNote, apiUpdateNote };

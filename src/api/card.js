const axios = require("axios");

//GET
const apiGetCards = () => {
  return axios.get("/api/card", {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

const apiGetCard = (cardId) => {
  return axios.get(`/api/card/${cardId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//DELETE
const apiDeleteCard = (cardId) => {
  return axios.delete(`/api/card/${cardId}`, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//POST
const apiAddCard = (card) => {
  return axios.post("/api/card", card, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

//PUT
const apiUpdateCard = (cardId, params) => {
  return axios.put(`/api/card/${cardId}`, params, {
    headers: {
      authorization: window.localStorage.getItem("token"),
    },
  });
};

export { apiGetCards, apiGetCard, apiDeleteCard, apiAddCard, apiUpdateCard };

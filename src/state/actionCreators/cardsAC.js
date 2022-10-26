import { apiAddCard, apiDeleteCard, apiGetCards } from "../../api/card";

const setCardsAC = () => {
  return async (dispatch) => {
    try {
      const response = await apiGetCards();
      dispatch({
        type: "SET_CARDS",
        cards: response.data,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

const addCardAC = (card) => {
  return async (dispatch) => {
    try {
      const response = await apiAddCard(card);
      dispatch({
        type: "ADD_CARD",
        card: response.data,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

const deleteCardAC = (cardId) => {
  return async (dispatch) => {
    try {
      await apiDeleteCard(cardId);
      dispatch({
        type: "DEL_CARD",
        cardId: cardId,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

export { setCardsAC, addCardAC, deleteCardAC };

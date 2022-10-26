const reducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.cards };
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.card] };
    case "DEL_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => action.cardId != card.id),
      };
    default:
      return state;
  }
};

export default reducer;

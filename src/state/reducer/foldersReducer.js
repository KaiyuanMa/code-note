const reducer = (state = { folders: [] }, action) => {
  switch (action.type) {
    case "SET_FOLDERS":
      return { ...state, cards: action.folders };
    case "ADD_FOLDER":
      return { ...state, folders: [...state.folders, action.folder] };
    case "DEL_FOLDER":
      return {
        ...state,
        cards: state.cards.filter((card) => action.cardId != card.id),
      };
    default:
      return state;
  }
  n;
};

export default reducer;

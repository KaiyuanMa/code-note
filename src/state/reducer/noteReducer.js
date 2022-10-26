const reducer = (state = { note: "" }, action) => {
  switch (action.type) {
    case "SET_NOTE":
      return { ...state, note: action.note };
    default:
      return state;
  }
};

export default reducer;

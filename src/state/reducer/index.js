import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import foldersReducer from "./foldersReducer";
import noteReducer from "./noteReducer";
import sessionReducer from "./sessionReducer";

const reducers = combineReducers({
  cards: cardsReducer,
  folders: foldersReducer,
  note: noteReducer,
  auth: sessionReducer,
});

export default reducers;

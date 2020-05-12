import { combineReducers } from "redux";

const resourceReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESOURCES":
      return action.payload;
    default:
      return state;
  }
};

const resourceListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESOURCES":
      return action.payload;
    case "CLEAR_RESOURCES":
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  resourceReducer,
  resourceListReducer,
});

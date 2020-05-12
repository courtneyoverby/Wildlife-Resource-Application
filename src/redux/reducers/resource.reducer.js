import { combineReducers } from "redux";

const resourceReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESOURCES":
      return action.payload;
    default:
      return state;
  }
};

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  resourceReducer,
  detailsReducer,
});

import { NEXT_PAGE, PREV_PAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        step: action.payload
      };
    case PREV_PAGE:
      return {
        ...state,
        step: action.payload
      };
    default:
      return state;
  }
};

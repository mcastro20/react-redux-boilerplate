import * as types from "./session-types";

export default (state = [], action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        sessionToken: action.sessionToken
      };
    default:
      return state;
  }
};

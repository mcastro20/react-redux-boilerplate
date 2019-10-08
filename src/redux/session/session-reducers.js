import * as types from "./session-types";

const initialState = {
  sessionToken: null
};

export default (state = initialState, action) => {
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

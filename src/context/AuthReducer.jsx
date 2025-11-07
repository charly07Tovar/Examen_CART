// src/context/AuthReducer.js
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case "CHECK_TOKEN":
      return {
        ...state,
        isAuthenticated: !!action.payload,
        token: action.payload || null,
      };
    default:
      return state;
  }
};

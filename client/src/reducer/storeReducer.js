import decodeToken from "../utils/decodeToken";

/* eslint-disable no-unused-vars */
const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      {
        state.userInfo = decodeToken(payload);
        state.token = payload;
      }
      break;
    default:
      return state;
  }
};

export default storeReducer;

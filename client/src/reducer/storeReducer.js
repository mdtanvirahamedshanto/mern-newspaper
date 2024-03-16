import decodeToken from "../utils/decodeToken";

/* eslint-disable no-unused-vars */
const storeReducer = (state, action) => {
  const { type, payload } = action;
  // switch (type) {
  //   case "login":
  //     {
  //       state.token = payload;
  //       state.userInfo = decodeToken(payload);
  //     }
  //     break;
  //   default:
  //     return state;
  // }
  if (type === "login") {
    state.token = payload;
    state.userInfo = decodeToken(payload);
  }

  return state;
};

export default storeReducer;

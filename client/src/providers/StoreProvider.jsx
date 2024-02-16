/* eslint-disable react/prop-types */
import { useReducer } from "react";
import StoreContext from "../contexts/StoreContext";
import storeReducer from "../reducer/storeReducer";
import decodeToken from "../utils/decodeToken";
// import decodeToken from "../utils/decodeToken";

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, {
    userInfo: decodeToken(localStorage.getItem("newstoken")),
    token: localStorage.getItem("newstoken") || "",
  });
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

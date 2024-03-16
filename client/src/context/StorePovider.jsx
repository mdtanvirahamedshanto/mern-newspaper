import { useReducer } from "react";
import decode_token from "../utils/index";
import storeContext from "./storeContext";
import storeReducer from "./storeReducer";

const StorePovider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, {
    userInfo: decode_token(localStorage.getItem("newsToken")),
    token: localStorage.getItem("newsToken") || "",
  });

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default StorePovider;

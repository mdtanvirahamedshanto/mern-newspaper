/* eslint-disable react/prop-types */
import { useReducer } from "react";
import StoreContext from "../contexts/StoreContext";
import storeReducer from "../reducer/storeReducer";

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, {
    userInfo: "",
    token: "",
  });
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

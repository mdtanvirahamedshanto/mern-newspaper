/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StoreContext from "../contexts/StoreContext";

const ProtectRole = ({ role }) => {
  const { store } = useContext(StoreContext);
  // const userInfo = {
  //   name: "shanto",
  //   role: "writer",
  // };
  console.log(role);
  console.log(store.userInfo.role);
  if (store?.userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};

export default ProtectRole;

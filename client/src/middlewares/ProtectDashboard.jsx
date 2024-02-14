import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StoreContext from "../contexts/StoreContext";

const ProtectDashboard = () => {
  const { store } = useContext(StoreContext);
  // const userInfo = {
  //   name: "shanto",
  //   role: "admin",
  // };

  if (store.userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectDashboard;

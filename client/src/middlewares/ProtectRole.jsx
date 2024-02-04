/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectRole = ({ role }) => {
  const userInfo = {
    name: "shanto",
    role: "admin",
  };

  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashborad/unable-access" />;
  }
};

export default ProtectRole;

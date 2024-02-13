/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectRole = ({ role }) => {
  const userInfo = {
    name: "shanto",
    role: "writer",
  };

  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};

export default ProtectRole;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-w-full min-h-screen bg-slate-100">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

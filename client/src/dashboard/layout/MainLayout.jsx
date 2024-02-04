import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-w-full min-h-screen bg-slate-100">
      <Sidebar />
      <div className="ml-[250px] w-[calc(100vw-250px)] min-h-[vh]">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

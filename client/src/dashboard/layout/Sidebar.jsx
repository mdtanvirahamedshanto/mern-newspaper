import { AiFillDashboard, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[70px] flex justify-center items-center">
        <Link to={"/"}>
          <img src="/logo/logo.png" alt="logo" />
        </Link>
      </div>
      <ul className="flex flex-col px-3 font-medium gap-y-1">
        <Link
          to={"/dashboard/admin"}
          className={`px-3 py-2 ${
            pathname === "/dashboard/admin"
              ? "bg-indigo-500 text-white"
              : "bg-white text-[#404040f6]"
          } hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <AiFillDashboard />
          </span>
          <span>Dashboard</span>
        </Link>
        <Link
          to={"/dashboard/news"}
          className={`px-3 py-2 ${
            pathname === "/dashboard/news"
              ? "bg-indigo-500 text-white"
              : "bg-white text-[#404040f6]"
          } hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <BiNews />
          </span>
          <span>News</span>
        </Link>
        <Link
          to={"/dashboard/writer/add"}
          className={`px-3 py-2 ${
            pathname === "/dashboard/writer/add"
              ? "bg-indigo-500 text-white"
              : "bg-white text-[#404040f6]"
          } hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <AiOutlinePlus />
          </span>
          <span>Add Write</span>
        </Link>
        <Link
          to={"/dashboard/writers"}
          className={`px-3 py-2 ${
            pathname === "/dashboard/writers"
              ? "bg-indigo-500 text-white"
              : "bg-white text-[#404040f6]"
          } hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <FiUsers />
          </span>
          <span>Writes</span>
        </Link>
        <Link
          to={"/dashboard/profile"}
          className={`px-3 py-2 ${
            pathname === "/dashboard/profile"
              ? "bg-indigo-500 text-white"
              : "bg-white text-[#404040f6]"
          } hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <AiOutlineUser />
          </span>
          <span>Profile</span>
        </Link>
        <Link
          to={"/dashboard/admin"}
          className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white `}
        >
          <span>
            <FiLogOut />
          </span>
          <span>Logout</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsContent = () => {
  return (
    <div>
      <div className="flex px-4 py-3 gap-x-3">
        <select
          name=""
          id=""
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
        <input
          type="text"
          placeholder="Search News..."
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
        />
      </div>
      <div className="relative p-4 overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Title</th>
              <th className="px-7 py-3">Image</th>
              <th className="px-7 py-3">Category</th>
              <th className="px-7 py-3">Description</th>
              <th className="px-7 py-3">Date</th>
              <th className="px-7 py-3">Status</th>
              <th className="px-7 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Shanto</td>
              <td className="px-6 py-4">
                <img
                  src="https://pbs.twimg.com/media/FjHfooTaUAAZaYw?format=jpg&name=large"
                  alt="Image"
                  className="size-[40px]"
                />
              </td>
              <td className="px-6 py-4">name</td>
              <td className="px-6 py-4">My Name</td>
              <td className="px-6 py-4">04</td>
              <td className="px-6 py-4">
                <span className="px-2 py-[2px] text-xs bg-green-100 text-green-800 cursor-pointer rounded-full">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-start items-center gap-x-4 text-white">
                  <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-600">
                    <FaEye />
                  </Link>
                  <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-600">
                    <FaEdit />
                  </Link>
                  <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-600">
                    <FaTrash />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end px-10 gap-x-3 text-stone-600">
        <div className="gap-x-3 flex justify-center items-center">
          <p className="px-4 py-3 font-semibold text-sm">News par page</p>
          <select
            name=""
            id=""
            className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
          >
            <option value="4">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <p className="px-6 py-3 font-semibold text-sm">16/22 - of 5</p>
        <div className="flex items-center gap-x-3 ">
          <IoIosArrowBack className="size-5 cursor-pointer" />
          <IoIosArrowForward className="size-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NewsContent;

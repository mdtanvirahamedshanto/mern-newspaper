import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminIndex = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-5 gap-x-4">
        <div className="w-full p-8 flex flex-col justify-center rounded-md items-center gap-y-2 bg-white text-slate-700">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm">Total News</span>
        </div>
        <div className="w-full p-8 flex flex-col justify-center rounded-md items-center gap-y-2 bg-white text-slate-700">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm">Pending News</span>
        </div>
        <div className="w-full p-8 flex flex-col justify-center rounded-md items-center gap-y-2 bg-white text-slate-700">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm">Active News</span>
        </div>
        <div className="w-full p-8 flex flex-col justify-center rounded-md items-center gap-y-2 bg-white text-slate-700">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm">Reactive News</span>
        </div>
        <div className="w-full p-8 flex flex-col justify-center rounded-md items-center gap-y-2 bg-white text-slate-700">
          <span className="text-xl font-bold">50</span>
          <span className="text-sm">Writers</span>
        </div>
      </div>
      <div className="bg-white p-4 mt-5">
        <div className="flex justify-between items-center pb-4">
          <h2 className="font-bold">Recent</h2>
          <Link>View all</Link>
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Writers = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Writers</h2>

        <Link
          to="/dashboard/writer/add"
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-900"
        >
          Add Writers
        </Link>
      </div>
      <div className="relative p-4 overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Repoter Name</th>
              <th className="px-7 py-3">Category</th>
              <th className="px-7 py-3">Role</th>
              <th className="px-7 py-3">Image</th>
              <th className="px-7 py-3">Email</th>
              <th className="px-7 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Shanto</td>
              <td className="px-6 py-4">Travel</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <img
                  src="https://pbs.twimg.com/media/FjHfooTaUAAZaYw?format=jpg&name=large"
                  alt="Image"
                  className="size-[40px]"
                />
              </td>
              <td className="px-6 py-4">mdtanvirahamedshanto@gmail.com</td>
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
  );
};

export default Writers;

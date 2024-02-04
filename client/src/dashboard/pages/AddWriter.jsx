import { Link } from "react-router-dom";

const AddWriter = () => {
  const categors = [
    "Category",
    "Health",
    "Education",
    "Travel",
    "Crime",
    "International",
    "Sports",
  ];
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Add Writers</h2>

        <Link
          to="/dashboard/writers"
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-900"
        >
          Writers
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-3">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-600"
              >
                Category
              </label>
              <select
                name=""
                id=""
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              >
                {categors.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="text-md font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link className="px-3 py-[6px] bg-blue-500 rounded-lg text-white hover:bg-blue-900">
              Add Writer
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWriter;

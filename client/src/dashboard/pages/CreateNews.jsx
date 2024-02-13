import JoditEditor from "jodit-react";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
const CreateNews = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Create News</h2>

        <Link
          to="/dashboard/news"
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-900"
        >
          News
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              htmlFor="title"
              className="text-md font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="img"
              className={`w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}
            >
              <div className="flex justify-center items-center flex-col gap-y-2">
                <span className="text-2xl">
                  <FaCloudUploadAlt />
                </span>
                <span>Select Image</span>
              </div>
            </label>
            <input className="hidden" type="file" id="img" />
          </div>

          <div className="flex flex-col gap-y-2 mb-6">
            <div className="flex justify-start items-center gap-x-2 ">
              <h2>Description </h2>
              <div onClick={() => setShow(true)}>
                <span className="text-2xl cursor-pointer">
                  <FaCloudUploadAlt />
                </span>
              </div>
            </div>
            <div>
              <JoditEditor
              // ref={editor}
              // value={description}
              // tabIndex={1}
              // onBlur={(value) => setDescription(value)}
              // onChange={() => {}}
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link className="px-3 py-[6px] bg-blue-500 rounded-lg text-white hover:bg-blue-900">
              Add News
            </Link>
          </div>
        </form>
      </div>
      {show && <Gallery setShow={setShow} images={[]} />}
    </div>
  );
};

export default CreateNews;

import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import { base_url } from "../../config/config";
import storeContext from "../../context/storeContext";
import Galler from "../components/Galler";

const CreateNews = () => {
  const { store } = useContext(storeContext);
  const [show, setShow] = useState(false);
  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const imageHandle = (e) => {
    const { files } = e.target;

    if (files.length > 0) {
      setImg(URL.createObjectURL(files[0]));
      setImage(files[0]);
    }
  };
  const [loader, setLoader] = useState(false);

  const added = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/api/news/add`, formData, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      console.log(data);
      setLoader(false);

      toast.success(data.message);
    } catch (error) {
      setLoader(false);
      toast.success(error.response.data.message);
    }
  };
  const [images, setImages] = useState([]);

  const get_images = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/images`, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      console.log(data.images);
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_images();
  }, []);

  const [imagesLoader, setImagesLoader] = useState(false);

  const imageHandler = async (e) => {
    const files = e.target.files;
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      setImagesLoader(true);

      const { data } = await axios.post(
        `${base_url}/api/images/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        }
      );
      setImagesLoader(false);
      setImages([...images, data.images]);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      setImagesLoader(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Add News</h2>
        <Link
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
          to="/dashboard/news"
        >
          News
        </Link>
      </div>

      <div className="p-4">
        <form onSubmit={added}>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              className="text-md font-medium text-gray-600"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              name="title"
              className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              id="title"
            />
          </div>
          <div className="mb-6">
            <div>
              <label
                htmlFor="img"
                className={`w-full h-[240px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}
              >
                {img ? (
                  <img src={img} className="w-full h-full" alt="image" />
                ) : (
                  <div className="flex justify-center items-center flex-col gap-y-2">
                    <span className="text-2xl">
                      <MdCloudUpload />
                    </span>
                    <span>Select Image</span>
                  </div>
                )}
              </label>
              <input
                required
                onChange={imageHandle}
                className="hidden"
                type="file"
                id="img"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <div className="flex justify-start items-center gap-x-2">
              <h2>Description</h2>
              <div onClick={() => setShow(true)}>
                <span className="text-2xl cursor-pointer">
                  <MdCloudUpload />
                </span>
              </div>
            </div>
            <div>
              <JoditEditor
                ref={editor}
                value={description}
                tabIndex={1}
                onBlur={(value) => setDescription(value)}
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              disabled={loader}
              className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
            >
              {" "}
              {loader ? "loading..." : "Add News"}
            </button>
          </div>
        </form>
      </div>
      <input
        onChange={imageHandler}
        type="file"
        multiple
        id="images"
        className="hidden"
      />
      {show && <Galler setShow={setShow} images={images} />}
    </div>
  );
};

export default CreateNews;

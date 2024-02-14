/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { base_url } from "../../config/config";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${base_url}/api/login`, state);
      console.log(data);
      toast("Loging Succsfully");
    } catch (error) {
      console.log(error);
      toast("Something Went Wrong");
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-slate-600 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full justify-center items-center flex">
            <img
              className="w-[150px] h-[90px]"
              src="/logo/logo.png"
              alt="logo"
            />
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                type="email"
                placeholder="email"
                name="email"
                value={state.email}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="email"
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  placeholder="password"
                  name="password"
                  value={state.password}
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="password"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                disabled={loader}
                className="px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white hover:bg-purple-600"
              >
                {loader ? "loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

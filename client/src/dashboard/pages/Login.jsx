/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../config/config";
import StoreContext from "../../contexts/StoreContext";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(StoreContext);

  const navigate = useNavigate();
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/api/login`, state);
      setLoader(false);
      localStorage.setItem("newstoken", data.token);
      toast.success(data.message);

      dispatch({
        type: "login",
        payload: data.token,
      });
      navigate("/dashboard");
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
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
    </div>
  );
};

export default Login;

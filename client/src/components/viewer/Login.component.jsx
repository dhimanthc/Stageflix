import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/viewer/login", loginFormData, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/");
          }, 6000);
        } else {
          handleError(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoginFormData({
      ...loginFormData,
      email: "",
      password: "",
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prevLoginFormData) => {
      return {
        ...prevLoginFormData,
        [name]: value,
      };
    });
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to Stageflix
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              value={loginFormData.email}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={loginFormData.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

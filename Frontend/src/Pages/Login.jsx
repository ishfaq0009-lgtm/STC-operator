import React, { useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [LoginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });


  let navigate = useNavigate();
  async function LoginPage() {
    let response = await axios.post(
      import.meta.env.VITE_backend_base_url+"/user/Login",LoginData,{withCredentials:true});
  
    let login = response.data.loginApi;
    if (response.data.success == true) {
      navigate("/AllProject");
    }
    console.log("Login Data is working");
  }


  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white h-120 w-110 flex justify-center items-center flex-col gap-8 rounded-lg shadow-2xl shadow-gray-400">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back</h1>
        </div>

        <input
          onChange={function (e) {
            setLoginData({
              ...LoginData,
              email: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md p-3 border border-gray-400"
          placeholder="Enter your email"
          type="email"
        />

        <input
          onChange={function (e) {
            setLoginData({
              ...LoginData,
              password: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md p-3 border border-gray-400"
          placeholder="Enter your Password"
          type="Password"
        />

        <select
          onChange={function (e) {
            setLoginData({
              ...LoginData,
              role: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md border border-gray-400"
        >
          <option> Select Role</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          onClick={LoginPage}
          className="h-10 w-80 bg-blue-700 rounded-md border border-gray-400 font-bold hover:bg-blue-800 hover:text-white cursor-pointer"
        >
          Login
        </button>

        <div className="">
          Not registered yet?
          <Link
            to="/Registration"
            className="text-blue-600 font-semibold hover:underline p-1"
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Registration = () => {

  let [RegistrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  let navigate = useNavigate();

  async function RegistrationPage() {
    let response = await axios.post(import.meta.env.VITE_backend_base_url+"/user/Registration",RegistrationData, {
    withCredentials: true
  });
    let Registration = response.data.Registr;
    if (response.data.success == true) {
      navigate("/");
    }
    console.log("Registration.Data");
  
  }

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center ">
      <div className="bg-white h-140 w-120 flex justify-center items-center flex-col gap-8 rounded-lg shadow-2xl shadow-gray-400">
        <h1 className="text-4xl font-bold">Create account</h1>

        <input
          onChange={function (e) {
            setRegistrationData({
              ...RegistrationData,
              name: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md p-3 border border-gray-400"
          placeholder="Enter your name"
          type="text"
        />

        <input
          onChange={function (e) {
            setRegistrationData({
              ...RegistrationData,
              email: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md p-3 border border-gray-400"
          placeholder="Enter your email"
          type="text"
        />

        <input
          onChange={function (e) {
            setRegistrationData({
              ...RegistrationData,
              password: e.target.value,
            });
          }}
          className="bg-gray-50 h-10 w-80 rounded-md p-3 border border-gray-400"
          placeholder="Enter your Password"
          type="Password"
        />

        <select
          onChange={function (e) {
            setRegistrationData({
              ...RegistrationData,
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
          onClick={RegistrationPage}
          className="h-10 w-80 bg-blue-700 rounded-md border border-gray-400 font-bold hover:bg-blue-800 hover:text-white cursor-pointer"
        >
          Sign Up
        </button>

        <div className="">
          Already have an account?
          <Link
            to="/"
            className="text-blue-600 font-semibold hover:underline p-1"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MemberCreate = () => {


    let [MemberCreateData,setMemberCreateData]=useState({
       name: "",
  post: "",
  phoneNo: "",
  address: ""
    });

    let navigate= useNavigate()

    async function MemberCreatePageData(){
        let response= await axios.post(import.meta.env.VITE_backend_base_url+"/members/membercreate",MemberCreateData);

        if(response.data.success==true){
navigate("/AllMember")
        }

    };

return (
  <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-4">

    <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-5">

      <h1 className="text-3xl font-bold text-center mb-3">
        Create Member
      </h1>

      <input
        onChange={(e) => {
          setMemberCreateData({
            ...MemberCreateData,
            name: e.target.value
          });
        }}
        className="h-14 w-full px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        placeholder="Enter member name"
        type="text"
      />

      <input
        onChange={(e) => {
          setMemberCreateData({
            ...MemberCreateData,
            post: e.target.value
          });
        }}
        className="h-14 w-full px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        placeholder="Enter member post"
        type="text"
      />

      <input
        onChange={(e) => {
          setMemberCreateData({
            ...MemberCreateData,
            phoneNo: e.target.value
          });
        }}
        className="h-14 w-full px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        placeholder="Enter member phoneNo"
        type="number"
      />

      <input
        onChange={(e) => {
          setMemberCreateData({
            ...MemberCreateData,
            address: e.target.value
          });
        }}
        className="h-14 w-full px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        placeholder="Enter member address"
        type="text"
      />

      <button
        onClick={MemberCreatePageData}
        className="h-14 w-full bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700"
      >
        Member Create
      </button>

    </div>
  </div>
);

}

export default MemberCreate

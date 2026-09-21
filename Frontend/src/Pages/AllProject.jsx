import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProject = () => {
  
  let [AllProject, setAllProject] = useState([]);

  let Navigate=useNavigate()

useEffect(()=>{
 async function check() {
    let response = await axios.get(import.meta.env.VITE_backend_base_url+"/user/checkMe",{withCredentials: true});
    if(response.data.success)
    {
      console.log("The Data tokenapi Working")
    }
    else{
  Navigate("/")
    }}
check()
},[])

  async function AllProjectPage() {
    let response = await axios.get(import.meta.env.VITE_backend_base_url+"/Project/GetProject",);

    if (response.data.success == true) {

      let project = response.data.project;
   console.log(project);
      setAllProject(project);
    }
  }

  useEffect(() => {
    AllProjectPage();
  }, []);

  return (
  <div className="bg-gray-100 min-h-screen w-full overflow-x-hidden">

    <h1 className="text-4xl md:text-5xl font-bold text-center pt-7 md:absolute md:left-145">
      My Project
    </h1>

    <div className="pt-10 md:pt-35 px-4 md:px-0 md:ml-10 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 justify-items-center">

      {AllProject.map(function (eachData) {
        return (
          <div className="w-full max-w-90">

            <div className="bg-white h-110 w-full rounded-lg shadow-2xl shadow-gray-500">

              <img
                className="h-60 w-full rounded-tl-lg rounded-tr-lg object-cover"
                src={eachData.image}
              />

              <h1 className="text-2xl font-bold ml-5 mt-5">
                {eachData.name}
              </h1>

              <h1 className="ml-5 mt-3">
                Customer:{" "}
                <span className="font-bold">{eachData.customer}</span>
              </h1>

              <div className="h-[1px] w-full bg-gray-300 mt-5"></div>

              <h1 className="ml-5 mt-3">
                {eachData.notes}
              </h1>

              <div className="flex mt-1 justify-center gap-2 px-2">

                <button className="bg-gray-800 text-white h-10 flex-1 rounded-lg font-bold">
                  Details
                </button>

                <button
                  onClick={function () {
                    Navigate(`/ProjectUpdata/${eachData._id}`);
                  }}
                  className="bg-blue-600 text-white h-10 flex-1 rounded-lg font-bold"
                >
                  Updata
                </button>

                <button
                  onClick={async function () {
                    let response = await axios.post(
                      import.meta.env.VITE_backend_base_url +
                        "/Project/DeleteProject",
                      { id: eachData._id }
                    );

                    if (response.data.success == true) {
                      AllProjectPage();
                    }
                  }}
                  className="bg-red-500 text-white h-10 flex-1 rounded-lg font-bold"
                >
                  Delete
                </button>

              </div>

            </div>
          </div>
        );
      })}

    </div>
  </div>
);
}

export default AllProject;

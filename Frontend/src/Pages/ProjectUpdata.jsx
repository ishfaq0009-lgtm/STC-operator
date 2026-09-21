import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProjectUpdata = () => {
  const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");

  let navigate = useNavigate();
 let { id_projectId } = useParams();

  
 async function projectCreatePage() {
    let formData = new FormData();

    formData.append("name", name);
    // formData.append("image", image);
    formData.append("customer", customer);
    formData.append("notes", notes);

    try {
      let response = await axios.post(
        import.meta.env.VITE_backend_base_url + "/Project/getOneProject",  { id: id_projectId });

      if (response.data.success === true) {
        let UpData=response.data.project

        setName(UpData.name)
        setCustomer(UpData.customer)
        setNotes(UpData.notes)
      }

    } catch (error) {
      console.error("Error creating project:", error);
    }
  }

  useEffect(()=>{
    projectCreatePage()

  },[])
  
  async function projectUpdataPage() {
  let response = await axios.post(
    import.meta.env.VITE_backend_base_url + "/Project/UpdataProject",
    {
      name,
      customer,
      notes,
      id: id_projectId
    }
  );

  if (response.data.success == true) {
    navigate("/AllProject");
  }
}

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white p-8 flex justify-center items-center rounded-lg flex-col gap-6">
        <h1 className="font-bold text-3xl">Updata project</h1>
        <input
         value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter project name"
          type="text"
        />

        <input
        value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter customer"
          type="text"
        />

        {/* <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
        /> */}

        <textarea
        value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="bg-gray-50 h-30 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter your notes"
        />
        
        <button
          onClick={projectUpdataPage}
          className="bg-blue-600 text-white h-10 w-90 rounded-md font-bold"
        >
          Project Updata
        </button>
      </div>
    </div>
  );
};

export default ProjectUpdata;
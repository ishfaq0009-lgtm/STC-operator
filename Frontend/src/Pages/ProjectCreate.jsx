import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCreate = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");

  let navigate = useNavigate();

  async function projectCreatePage() {
    let formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    formData.append("customer", customer);
    formData.append("notes", notes);

    try {
      let response = await axios.post(
        import.meta.env.VITE_backend_base_url + "/Project/ProjectsApi",
        formData
      );

      if (response.data.success === true) {
        navigate("/AllProject");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  }

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white p-8 flex justify-center items-center rounded-lg flex-col gap-6">
        <h1 className="font-bold text-3xl">Create project</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter project name"
          type="text"
        />

        <input
          onChange={(e) => setCustomer(e.target.value)}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter customer"
          type="text"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="bg-gray-50 h-10 w-90 rounded-md p-3 border border-gray-300"
        />

        <textarea
          onChange={(e) => setNotes(e.target.value)}
          className="bg-gray-50 h-30 w-90 rounded-md p-3 border border-gray-300"
          placeholder="Enter your notes"
        />
        
        <button
          onClick={projectCreatePage}
          className="bg-blue-600 text-white h-10 w-90 rounded-md font-bold"
        >
          Project Create
        </button>
      </div>
    </div>
  );
};

export default ProjectCreate;
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import ProjectCreate from "./Pages/ProjectCreate.jsx";
import AllProject from "./Pages/AllProject.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import ProjectUpdata from "./Pages/ProjectUpdata.jsx";
import MemberCreate from "./Pages/MemberCreate.jsx";
import AllMember from "./Pages/AllMember.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ProjectCreate" element={<ProjectCreate/>} />
        <Route path="/AllProject" element={<AllProject/>}/>
        <Route path="/ProjectUpdata/:id_projectId" element={<ProjectUpdata />} />
        <Route path="/MemberCreate" element={<MemberCreate/>}/>
        <Route path="/AllMember" element={<AllMember/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

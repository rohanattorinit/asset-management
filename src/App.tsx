import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Asset from "./pages/employee/Asset";
import Ticket from "./pages/employee/Ticket";
import Login from "./pages/Login";
import EmpList from "./pages/admin/EmpList";
import Assets from "./pages/admin/Assets";
import Services from "./pages/admin/Services";
import { AddEmployee } from "./pages/admin/AddEmployee";
import { AddAsset } from "./pages/admin/AddAsset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee" element={<Dashboard />} />
          <Route path="/employee/profile" element={<Profile />} />
          <Route path="/employee/asset" element={<Asset />} />
          <Route path="/employee/ticket" element={<Ticket />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/employee" element={<EmpList />} />
          <Route path="/admin/assets" element={<Assets />} />
          <Route path="/admin/service" element={<Services />} />

          <Route path="/admin/employee/create" element={<AddEmployee/>} />
          <Route path="/admin/assets/create" element={<AddAsset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

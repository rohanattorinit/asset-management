import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/employee/Profile";
import Asset from "./pages/employee/Asset";
import Ticket from "./pages/employee/Ticket";
import { AddEmployee } from "./pages/admin/AddEmployee";
import { AddAsset } from "./pages/admin/AddAsset";
import { EmployeeDetails } from "./pages/admin/EmployeeDetails";
import Dashboard from "./pages/employee/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee/profile" element={<Profile />} />
          <Route path="/employee/asset" element={<Asset />} />
          <Route path="/employee/ticket" element={<Ticket />} />
          
          <Route path="/admin/employee/create" element={<AddEmployee />} />
          <Route path="/admin/asset/create" element={<AddAsset />} />
          <Route path="/admin/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

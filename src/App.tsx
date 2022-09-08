import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Asset from "./pages/employee/Asset";
import Ticket from "./pages/employee/Ticket";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

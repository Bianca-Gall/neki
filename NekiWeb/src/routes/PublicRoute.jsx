import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Login from "../pages/Login/login";
// import Register from "../pages/Register/register";
import Home from "../pages/Home/home";

const PublicRoute = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/cadastro" element={<Register />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    // </Router>
  );
}

export default PublicRoute;

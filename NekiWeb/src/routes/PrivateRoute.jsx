import React from "react";
import { Route, Routes,  } from "react-router-dom";
import Home from "../pages/Home/home";

const PrivateRoute = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Navigate to="Home" />} /> */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default PrivateRoute;

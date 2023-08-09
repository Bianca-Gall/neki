import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
// import Header from "./components/Header/header";
import DarkMode from "./components/Darkmode/darkMode";
import "./app.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <DarkMode />
        </div>
        <PublicRoute />
      </BrowserRouter>
    </>
  );
}

export default App;

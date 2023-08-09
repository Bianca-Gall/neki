import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./password.css";

function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="senha" className="labelLogin">
        Senha
      </label>
      <div className="inputPasswordBox">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputPassword"
        />
        <div className="EyePassword" onClick={toggleShowPassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
    </div>
  );
}

export default Password;

import React, { useState } from "react";
import "./login.css";
import Password from "../../components/Password/password";
import Checkbox from "../../components/Checkbox/checkbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ImEnter } from "react-icons/im";
import Register from "../../components/Register/register";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://64d15f3bff953154bb7a4749.mockapi.io/nekiMock",
        {
          auth: {
            username: "user",
            password: "password",
          },
        }
      );
      const users = response.data;
      const user = users.find(
        (user) => user.user === username && user.password === password
      );

      if (user) {
        if (rememberPassword) {
          localStorage.setItem("rememberedPassword", password);
        }

        navigate("/home");
      } else {
        alert("Nome de usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição", error);
    }
  };

  return (
    <body>
      <div className="container">
        <div className="box">
          <label className="login">
            {" "}
            Login
            <span>
              <ImEnter />
            </span>
          </label>
          <label className="labelLogin" htmlFor="usuario">
            Usuário
          </label>
          <input
            type="text"
            placeholder="usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Password setPassword={setPassword} />
          <Checkbox
            rememberPassword={rememberPassword}
            setRememberPassword={setRememberPassword}
          />
          <button onClick={handleLogin}>ENTRAR</button>
          <Register />
        </div>
      </div>
    </body>
  );
}

export default Login;
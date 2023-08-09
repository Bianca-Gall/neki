import { useContext } from "react";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BotaoUser from "../BotaoUser";
import DarkMode from "../Darkmode/darkMode";
// import { DarkModeContext } from "../../context/DarkModeContext";

function Header() {
  const { isLogged, desLogar, user } = useContext(AuthContext);
  const navigate = useNavigate();
//   const { darkMode } = useContext(DarkModeContext);

  const sair = () => {
    desLogar();
    navigate("/");
  };

  const getShort = (word) => {
    let short = "";
    for (let i of word) {
      if (i == " ") {
        break;
      } else {
        short = short + i;
      }
    }
    return short;
  };

  return (
    <header>
     
      <div style={{ flexGrow: 1 }}></div>
      {isLogged ? (
        <>
       <DarkMode/>
       <BotaoUser
            tabIndex={0}
            style={{ marginRight: 30 }}
            className="header-button"
            sair={sair}
            username={getShort(user.name)}
          />
       </>
      ) : null}
    </header>
  );
}

export default Header;

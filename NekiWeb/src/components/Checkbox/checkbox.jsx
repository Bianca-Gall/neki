import React from "react";
import "./checkbox.css";
import { BsFillClipboardFill, BsFillClipboardPlusFill } from "react-icons/bs";

function Checkbox({ rememberPassword, setRememberPassword }) {
  const handleRememberPasswordChange = () => {
    setRememberPassword(!rememberPassword);
  };

  return (
    <div >
      <label className="checkboxBox">
        <input
          type="checkbox"
          checked={rememberPassword}
          onChange={handleRememberPasswordChange}
          className="checkboxInput"
        />
        <div className="checkboxIcon">
          {rememberPassword ? (
            <BsFillClipboardPlusFill />
          ) : (
            <BsFillClipboardFill />
          )}
        </div>
        Gravar Senha
      </label>
    </div>
  );
}

export default Checkbox;

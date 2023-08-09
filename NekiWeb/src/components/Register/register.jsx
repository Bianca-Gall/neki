import React, { useState } from "react";
import Modal from "react-modal";
import "./register.css";

function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>CADASTRAR</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Cadastro"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: modalContentStyle,
        }}
      >
        <form className="form">
          <p className="title">Cadastro</p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Nome:</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Sobrenome:</span>
            </label>
          </div>

          <label>
            <input className="input" type="password" placeholder="" required />
            <span>Password</span>
          </label>
          <label>
            <input className="input" type="password" placeholder="" required />
            <span>Confirm password</span>
          </label>
          <button>Cadastrar</button>
          <button onClick={closeModal}>Fechar</button>
        </form>
      </Modal>
    </div>
  );
}

export default Register;

const modalContentStyle = {
  width: "35%",
  height: "80%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
};

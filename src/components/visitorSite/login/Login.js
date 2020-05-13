import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import NavLink from "react-bootstrap/NavLink";
import LoginForm from "./LoginForm";

// Navigation Menu
function Login() {
  const [modal, SetModal] = useState(false);

  const closeModal = () => SetModal(false);
  const openModal = () => SetModal(true);

  return (
    <>
      <NavLink onClick={openModal}>Admin</NavLink>
      <Modal size="lg" show={modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;

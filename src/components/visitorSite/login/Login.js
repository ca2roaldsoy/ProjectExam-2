import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import NavLink from "react-bootstrap/NavLink";

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
          <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Hello</h2>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;

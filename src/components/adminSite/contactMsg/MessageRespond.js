import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MessageRespondForm from "./MessageRespondForm";

// Navigation Menu
function MessageRespond({ name, email }) {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  return (
    <>
      <Button onClick={openModal}>Respond</Button>
      <Modal size="lg" show={modal} onHide={closeModal}>
        <small>To: {name}</small>
        <small>Email: {email}</small>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MessageRespondForm closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MessageRespond;

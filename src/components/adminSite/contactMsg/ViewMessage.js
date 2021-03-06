import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MessageRespondForm from "./MessageRespondForm";

function ViewMessage({ idx }) {
  const [modal, setModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("message"));
    setMessage(getStorage);
  }, []);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  return message.map((viewMsg, id) => {
    return ( 
      <>
        {idx === id ? 
          <>
            {!validated ? (
              <Button onClick={openModal} role="button" className="message__btn">
                View Message
              </Button>
            ) : (
              "Message Sent"
            )}

            {/* Open respond modal */}
            <Modal
              size="lg"
              show={modal}
              onHide={closeModal}
              className="messageModal"
            >
              <small>From: {viewMsg.name}</small>
              <small>Email: {viewMsg.email}</small>
              <Modal.Header closeButton>
                <Modal.Title>Message</Modal.Title>
              </Modal.Header>
              <Modal.Body>{viewMsg.message}</Modal.Body>
              <MessageRespondForm
                closeModal={closeModal}
                validated={validated}
                setValidated={setValidated}
                id={idx}
              />
            </Modal>
          </>
        : null 
        }
      </>
    );
  })
}

ViewMessage.propTypes = {
  idx: PropTypes.number.isRequired,
};

export default ViewMessage;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MessageRespondForm from "./MessageRespondForm";
import { BASE_URL, headers } from "../../../constants/api";

function ViewMessage({ id }) {
  const [modal, setModal] = useState(false);
  const [viewMsg, setViewMsg] = useState([]);
  const [viewed, setViewed] = useState(false);

  const url = BASE_URL + "contacts/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((msg) => setViewMsg(msg))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => {
    const url = BASE_URL + "contacts/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options);
    setModal(false);
    setViewed(true);
  };
  const openModal = () => setModal(true);
  const setView = () => setViewed(true);

  return (
    <>
      {!viewed ? (
        <Button onClick={openModal} role="button">
          View Message
        </Button>
      ) : (
        "Message Sent"
      )}
      <Modal size="lg" show={modal} onHide={closeModal}>
        <small>From: {viewMsg.name}</small>
        <small>Email: {viewMsg.email}</small>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{viewMsg.message}</Modal.Body>
        <MessageRespondForm closeModal={closeModal} id={id} />
      </Modal>
    </>
  );
}

ViewMessage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewMessage;

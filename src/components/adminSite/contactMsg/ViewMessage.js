import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MessageRespondForm from "./MessageRespondForm";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import Loading from "../../spinner/Loading";

function ViewMessage({ id }) {
  const [modal, setModal] = useState(false);
  const [viewMsg, setViewMsg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [validated, setValidated] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "contacts/" + id;
  const options = { headers };

  // fetch ONE contact message
  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        // check if response is ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((msg) => {
        setViewMsg(msg);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  // use spinner
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/*display error if promise from fetch not ok*/}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
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
              id={id}
            />
          </Modal>
        </>
      )}
    </>
  );
}

ViewMessage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewMessage;

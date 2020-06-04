import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EnquiryModal({
  accepted,
  rejected,
  closeAcceptModal,
  closeRejectModal,
  setConfirmAccept,
  setConfirmReject,
}) {
  if (accepted) {
    return (
      <Modal size="lg" show={accepted} onHide={closeAcceptModal}>
        <Modal.Header closeButton>
          <Modal.Title>Accept Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to <b>accept</b> this enquiry?
          </p>
          <p>Waning: This cannot be undone!</p>
          <Button onClick={() => setConfirmAccept(true)} role="button">
            Yes
          </Button>
          <Button onClick={closeAcceptModal} role="button">
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
  if (rejected) {
    return (
      <Modal size="lg" show={rejected} onHide={closeRejectModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to <b>reject</b> this enquiry?
          </p>
          <p>Waning: This cannot be undone!</p>
          <Button onClick={() => setConfirmReject(true)} role="button">
            Yes
          </Button>
          <Button onClick={closeRejectModal} role="button">
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
  return null;
}

export default EnquiryModal;

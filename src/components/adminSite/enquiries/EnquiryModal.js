import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import EnquiryAnswer from "./EnquiryAnswer";

function EnquiryModal({
  accepted,
  rejected,
  closeAcceptModal,
  closeRejectModal,
  setConfirmAccept,
  setConfirmReject,
}) {
  function enquiryAnswer() {
    if (accepted || rejected) {
      return (
        <Modal
          size="md"
          show={accepted || rejected}
          backdrop="static"
          keyboard={false}
          className="enquiryModal"
        >
          {accepted ? (
            <>
              <Modal.Header className="enquiriesModal__header">
                <Modal.Title>Accept Enquiry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to <b>ACCEPT</b> this enquiry?
                </p>
                <p>
                  <span className="confirmWarning">Waning:</span> This action
                  cannot be undone!
                </p>
                <Button
                  onClick={() => setConfirmAccept(true)}
                  role="button"
                  className="modal__body--btn"
                >
                  Yes
                </Button>
                <Button
                  onClick={closeAcceptModal}
                  role="button"
                  className="modal__body--btn"
                >
                  Cancel
                </Button>
              </Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header className="enquiriesModal__header">
                <Modal.Title>Reject Enquiry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to <b>REJECT</b> this enquiry?
                </p>
                <p>
                  <span className="confirmWarning">Waning:</span> This cannot be
                  undone!
                </p>
                <Button
                  onClick={() => setConfirmReject(true)}
                  role="button"
                  className="modal__body--btn"
                >
                  Yes
                </Button>
                <Button
                  onClick={closeRejectModal}
                  role="button"
                  className="modal__body--btn"
                >
                  Cancel
                </Button>
              </Modal.Body>
            </>
          )}
        </Modal>
      );
    }
  }
  return <section>{enquiryAnswer()}</section>;
}

EnquiryModal.propTypes = {
  accepted: PropTypes.bool.isRequired,
  rejected: PropTypes.bool.isRequired,
  closeAcceptModal: PropTypes.func.isRequired,
  closeRejectModal: PropTypes.func.isRequired,
  setConfirmAccept: PropTypes.func.isRequired,
  setConfirmReject: PropTypes.func.isRequired,
};

export default EnquiryModal;

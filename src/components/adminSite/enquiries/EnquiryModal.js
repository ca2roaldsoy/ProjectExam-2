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
  function enquiryAnswer() {
    if (accepted || rejected) {
      return (
        <Modal
          size="md"
          show={accepted || rejected}
          onHide={closeAcceptModal}
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
                  className="enquiriesModal__body--btn"
                >
                  Yes
                </Button>
                <Button
                  onClick={closeAcceptModal}
                  role="button"
                  className="enquiriesModal__body--btn"
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
                  className="enquiriesModal__body--btn"
                >
                  Yes
                </Button>
                <Button
                  onClick={closeRejectModal}
                  role="button"
                  className="enquiriesModal__body--btn"
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

  /*if (accepted) {
    return (
      <Modal size="lg" show={accepted} onHide={closeAcceptModal}>
        <Modal.Header closeButton>
          <Modal.Title>Accept Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to <b>ACCEPT</b> this enquiry?
          </p>
          <p>
            <span className="confirmWarning">Waning:</span> This cannot be
            undone!
          </p>
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
      <Modal
        size="md"
        show={rejected}
        onHide={closeRejectModal}
        backdrop="static"
        keyboard={false}
        className="enquiryModal"
      >
        <Modal.Header closeButton className="enquiriesModal__header">
          <Modal.Title className="enquiriesModal__title">
            Reject Enquiry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="enquiriesModal__body">
          <p>
            Are you sure you want to <b>REJECT</b> this enquiry?
          </p>
          <p>
            <span className="confirmWarning">Waning:</span> This action cannot
            be undone!
          </p>
          <Button
            onClick={() => setConfirmReject(true)}
            role="button"
            className="enquiriesModal__body--btn"
          >
            Yes
          </Button>
          <Button
            onClick={closeRejectModal}
            role="button"
            className="enquiriesModal__body--btn"
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    );
  }*/
  return <section>{enquiryAnswer()}</section>;
}

export default EnquiryModal;

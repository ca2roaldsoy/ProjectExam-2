import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import EnquiryAnswer from "./EnquiryAnswer";
import PropTypes from "prop-types";
import EnquiryModal from "./EnquiryModal";

function EnquiriesDetails({
  name,
  email,
  id,
  checkIn,
  checkOut,
  created,
  establishmentName,
}) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);

  const openAcceptModal = () => setAccepted(true);
  const openRejectModal = () => setRejected(true);
  const closeAcceptModal = () => setAccepted(false);
  const closeRejectModal = () => setRejected(false);

  return (
    <tr>
      <td>{establishmentName}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{checkIn.slice(0, 10)}</td>
      <td>{checkOut.slice(0, 10)}</td>
      <td>{created.slice(0, 10)}</td>
      <td className="enquiries__resolveContainer">
        {/*display clicked answer*/}
        {confirmAccept || confirmReject ? (
          <EnquiryAnswer
            accept={confirmAccept}
            reject={confirmReject}
            id={id}
          />
        ) : (
          <>
            <Button onClick={openAcceptModal} role="button">
              Accept
            </Button>

            <Button onClick={openRejectModal} role="button">
              Reject
            </Button>

            <EnquiryModal
              accepted={accepted}
              rejected={rejected}
              setConfirmAccept={setConfirmAccept}
              setConfirmReject={setConfirmReject}
              closeAcceptModal={closeAcceptModal}
              closeRejectModal={closeRejectModal}
            />
          </>
        )}
      </td>
    </tr>
  );
}

EnquiriesDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  establishmentName: PropTypes.string.isRequired,
};

export default EnquiriesDetails;

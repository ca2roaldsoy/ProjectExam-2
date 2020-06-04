import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import EnquiryAnswer from "./EnquiryAnswer";
import PropTypes from "prop-types";

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

  return (
    <tr>
      <td>{establishmentName}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{checkIn.slice(0, 10)}</td>
      <td>{checkOut.slice(0, 10)}</td>
      <td>{created.slice(0, 10)}</td>
      <td className="enquiries__resolveContainer">
        {accepted || rejected ? (
          <EnquiryAnswer
            accepted={accepted}
            rejected={rejected}
            created={created}
            id={id}
          />
        ) : (
          <>
            <Button onClick={() => setAccepted(true)} role="button">
              Accept
            </Button>
            <Button onClick={() => setRejected(true)} role="button">
              Reject
            </Button>
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

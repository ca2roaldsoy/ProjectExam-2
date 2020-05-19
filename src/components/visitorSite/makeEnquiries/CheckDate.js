import React from "react";
import Alert from "react-bootstrap/Alert";

function CheckDate({ checkIn, checkOut }) {
  // check if check out is later than check in
  if (checkOut < checkIn) {
    return (
      <>
        <Alert variant="danger">
          <Alert.Heading>Warning</Alert.Heading>
          <p>You are trying to check out before checking in.</p>
        </Alert>
      </>
    );
  }
  return null;
}

export default CheckDate;

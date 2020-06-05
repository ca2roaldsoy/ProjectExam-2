import React from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

// if validated is true, display message sent
function Validated({ validated, message }) {
  if (validated) {
    switch (message) {
      case 1:
        return (
          <Alert variant="success" role="alert">
            <Alert.Heading>Enquiry Sent</Alert.Heading>
            <p>Thank you for your enquiry</p>
            <p>
              You can now return <Link to="/">home</Link>
            </p>
          </Alert>
        ); // message after sending enquiry
      case 2:
        return (
          <Alert variant="success" role="alert">
            <Alert.Heading>Message Sent</Alert.Heading>
            <p>Thank you for contacting us</p>
            <p>
              You can now return <Link to="/">home</Link>
            </p>
          </Alert>
        ); // message after sending contact message
      case 3:
        return (
          <Alert variant="success" role="alert">
            <Alert.Heading>Success</Alert.Heading>
            <p>The establishment was created</p>
            <p>
              Return back to admin <Link to="/admin">home</Link>
            </p>
          </Alert>
        ); // message after sending enquiry // message after establishment is created
      default:
        return (
          <Alert variant="success" role="alert">
            <Alert.Heading>Message Sent!</Alert.Heading>
          </Alert>
        );
    }
  }
  return null;
}

Validated.propTypes = {
  validated: PropTypes.bool.isRequired,
  message: PropTypes.number.isRequired,
};

export default Validated;

import React from "react";
import PropTypes from "prop-types";

// if validated is true, display message sent
function Validated({ validated, message }) {
  if (validated) {
    switch (message) {
      case 1:
        return <p>Enquiry sent</p>;
      case 2:
        return <p>Message sent</p>;
      case 3:
        return <p>Establishment Created</p>;
      default:
        return null;
    }
  }
  return null;
}

Validated.propTypes = {
  validated: PropTypes.bool.isRequired,
  message: PropTypes.number.isRequired,
};

export default Validated;

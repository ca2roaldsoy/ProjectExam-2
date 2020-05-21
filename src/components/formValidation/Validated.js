import React from "react";
import PropTypes from "prop-types";

// if validated is true, display message sent
function Validated({ validated, message }) {
  if (validated) {
    switch (message) {
      case 1:
        return <div>Enquiry sent</div>;
      case 2:
        return <div>Message sent</div>;
      case 3:
        return <div>Establishment Created</div>;
      default:
        return null;
    }
  }
  return null;
}

Validated.propTypes = {
  validated: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Validated;

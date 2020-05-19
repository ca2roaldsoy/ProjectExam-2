import React from "react";
import PropTypes from "prop-types";

// if validated is true, display message sent
function Validated({ validated }) {
  if (validated) {
    return <div>Message Sent</div>;
  }

  return null;
}

Validated.propTypes = {
  validated: PropTypes.bool.isRequired,
};

export default Validated;

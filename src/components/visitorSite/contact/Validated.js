import React from "react";
import PropTypes from "prop-types";

// if valdition passes, display message
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

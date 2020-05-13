import React from "react";
import PropTypes from "prop-types";

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

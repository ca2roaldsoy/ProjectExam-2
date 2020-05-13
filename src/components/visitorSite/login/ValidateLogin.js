import React from "react";
import PropTypes from "prop-types";

function ValidateLogIn({ validLogin }) {
  if (validLogin) {
    return (window.location.href = "./admin");
  }

  return null;
}

ValidateLogIn.propTypes = {
  validLogin: PropTypes.bool.isRequired,
};

export default ValidateLogIn;

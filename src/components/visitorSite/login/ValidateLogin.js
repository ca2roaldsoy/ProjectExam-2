import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createBrowserHistory as history } from "history";

function ValidateLogIn({ validLogin }) {
  if (validLogin) {
    window.location.href = "./admin";
  }

  return null;
}

ValidateLogIn.propTypes = {
  validLogin: PropTypes.bool.isRequired,
};

export default ValidateLogIn;

import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// if validLogin is true, log in user.
function ValidateLogIn({ validLogin }) {
  const history = useHistory();

  if (validLogin) {
    history.push("./admin");
  }

  return null;
}

ValidateLogIn.propTypes = {
  validLogin: PropTypes.bool.isRequired,
};

export default ValidateLogIn;

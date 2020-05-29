import React from "react";
import DropDown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

function DropDownResult({ name, idx }) {
  // create a path that links to detail page of establishment
  const path = "establishment/" + idx;

  return <DropDown.Item href={path}>{name}</DropDown.Item>;
}

DropDownResult.propTypes = {
  name: PropTypes.string.isRequired,
  idx: PropTypes.string.isRequired,
};

export default DropDownResult;

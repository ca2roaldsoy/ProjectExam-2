import React from "react";
import DropDown from "react-bootstrap/Dropdown";

function DropDownResult({ name, idx }) {
  return (
    <DropDown>
      <DropDown.Item eventKey={idx}>{name}</DropDown.Item>
    </DropDown>
  );
}

export default DropDownResult;

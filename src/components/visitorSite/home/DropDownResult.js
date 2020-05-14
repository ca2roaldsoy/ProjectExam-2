import React from "react";
import DropDown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function DropDownResult({ name, idx }) {
  const path = "establishment/" + idx;

  return (
    <DropDown>
      <DropDown.Item eventKey={idx} href={path}>
        {name}
      </DropDown.Item>
    </DropDown>
  );
}

export default DropDownResult;

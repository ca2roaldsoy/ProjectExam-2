import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function ManageEstablishment() {
  return (
    <>
      <NavLink to="./createNewEstablishment">
        <Button>Create New Establishment</Button>
      </NavLink>
      <NavLink to="./deleteEstablishment">
        <Button>Delete Establishment</Button>
      </NavLink>
    </>
  );
}

export default ManageEstablishment;

import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function ManageEstablishment() {
  return (
    <>
      <NavLink to="./create-establishments/">
        <Button>Create New Establishment</Button>
      </NavLink>
      <NavLink to="./delete-establishments/">
        <Button>Delete Establishment</Button>
      </NavLink>
    </>
  );
}

export default ManageEstablishment;

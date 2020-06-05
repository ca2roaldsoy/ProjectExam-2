import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function ManageEstablishment() {
  return (
    <Container className="manageEstablishmentMenu">
      <NavLink to="./create-establishments/">
        <Button>Create New Establishment</Button>
      </NavLink>
      <NavLink to="./delete-establishments/">
        <Button>Delete Establishment</Button>
      </NavLink>
    </Container>
  );
}

export default ManageEstablishment;

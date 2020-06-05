import React from "react";
import EstablishmentForm from "./EstablishmentForm";
import Container from "react-bootstrap/Container";

function NewEstablishment() {
  return (
    <Container>
      <h2>Create New Establishment</h2>
      <EstablishmentForm />
    </Container>
  );
}

export default NewEstablishment;

import React from "react";
import EstablishmentForm from "./EstablishmentForm";
import Container from "react-bootstrap/Container";

function NewEstablishment() {
  return (
    <Container className="containerForm">
      <div className="containerForm__form">
        <h2 className="text-center">Create New Establishment</h2>
        <EstablishmentForm />
      </div> 
    </Container>
  );
}

export default NewEstablishment;

import React from "react";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
      <Container className="containerForm">
        <div className="containerForm__form">
          <h2 className="text-center">Contact Us</h2>
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;

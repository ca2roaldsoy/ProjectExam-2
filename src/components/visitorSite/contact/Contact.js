import React from "react";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

function Contact() {
  return (
    <>
      <Breadcrumbs crumb={1} />
      <Container className="containerForm">
        <div className="containerForm__form" as="article">
          <h2 className="text-center">Contact Us</h2>
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;

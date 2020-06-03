import React from "react";
import EnquiryForm from "./EnquiryForm";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";

function MakeEnquiries() {
  const { name, id } = useParams();

  return (
    <>
      <BreadCrumbs crumb={2} />
      <Container className="containerForm">
        <div className="containerForm__form">
          <h2 className="text-center">Make an Enquiry for {name}</h2>
          <EnquiryForm name={name} id={id} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default MakeEnquiries;

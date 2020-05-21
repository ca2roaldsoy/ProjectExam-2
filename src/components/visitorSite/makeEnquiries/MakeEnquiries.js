import React from "react";
import EnquiryForm from "./EnquiryForm";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";

function MakeEnquiries() {
  const { name, id } = useParams();

  return (
    <>
      <h1>Make an Enquiry for {name}</h1>
      <EnquiryForm name={name} id={id} />
      <Footer />
    </>
  );
}

export default MakeEnquiries;

import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Accept from "../../../images/accept.png";
import Reject from "../../../images/reject.png";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../../../constants/api";

function EnquiryAnswer({ accepted, rejected, created, id }) {
  function deleteEstablishment() {
    const url = BASE_URL + "enquiries/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options);
  }

  // if enquiry is accepted
  if (accepted) {
    return (
      <>
        {deleteEstablishment()}
        <>
          Accepted
          <Image
            src={Accept}
            alt="accept"
            fluid
            className="img-responsive"
            role="img"
          />
        </>
      </>
    );
  }

  // if enquiry is rejected
  if (rejected) {
    return (
      <>
        {deleteEstablishment()}
        <Card>
          <Card.Title as="h3">Rejected</Card.Title>
          <Image
            src={Reject}
            alt="reject"
            fluid
            className="img-responsive"
            role="img"
          />
          <Card.Footer>{created.slice(0, 10)}</Card.Footer>
        </Card>
      </>
    );
  }
}

EnquiryAnswer.propTypes = {
  accepted: PropTypes.bool.isRequired,
  rejected: PropTypes.bool.isRequired,
  created: PropTypes.string.isRequired,
};

export default EnquiryAnswer;

import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Accept from "../../../images/accept.png";
import Reject from "../../../images/reject.png";
import PropTypes from "prop-types";

function EnquiryAnswer({ accepted, rejected, created }) {
  if (accepted) {
    return (
      <Card>
        <Card.Title>Accepted</Card.Title>
        <Image
          src={Accept}
          alt="accept"
          fluid
          className="img-responsive"
          role="img"
        />
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
      </Card>
    );
  }

  if (rejected) {
    return (
      <Card>
        <Card.Title>Rejected</Card.Title>
        <Image
          src={Reject}
          alt="reject"
          fluid
          className="img-responsive"
          role="img"
        />
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
      </Card>
    );
  }

  EnquiryAnswer.propTypes = {
    accepted: PropTypes.bool.isRequired,
    rejected: PropTypes.bool.isRequired,
    created: PropTypes.string.isRequired,
  };
}

export default EnquiryAnswer;

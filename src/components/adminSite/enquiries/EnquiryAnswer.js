import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accept from "../../../images/accept.png";
import Reject from "../../../images/reject.png";

function EnquiryAnswer({ accepted, rejected, created }) {
  if (accepted) {
    return (
      <Card>
        <Card.Title>Accepted</Card.Title>
        <Image src={Accept} fluid />
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
      </Card>
    );
  }

  if (rejected) {
    return (
      <Card>
        <Card.Title>Rejected</Card.Title>
        <Image src={Reject} fluid />
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
      </Card>
    );
  }
}

export default EnquiryAnswer;

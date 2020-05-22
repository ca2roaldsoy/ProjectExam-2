import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accept from "../../../images/accept.png";
import Reject from "../../../images/reject.png";

function EnquiriesDetails({ name, email, id, checkIn, checkOut, created }) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  function answer() {
    if (accepted) {
      return (
        <>
          <ListGroup.Item>Accepted</ListGroup.Item>
          <Image src={Accept} fluid />
          <Card.Footer>{created.slice(0, 10)}</Card.Footer>
        </>
      );
    }

    if (rejected) {
      return (
        <>
          <ListGroup.Item>Rejected</ListGroup.Item>
          <Image src={Reject} fluid />
          <Card.Footer>{created.slice(0, 10)}</Card.Footer>
        </>
      );
    }
  }

  return (
    <Col>
      <Card>
        <Card.Title>{name}</Card.Title>
        {accepted || rejected ? (
          answer()
        ) : (
          <>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>E-mail: {email} </ListGroup.Item>
                <ListGroup.Item>
                  Check In: {checkIn.slice(0, 10)}
                </ListGroup.Item>
                <ListGroup.Item>
                  Check Out: {checkOut.slice(0, 10)}
                </ListGroup.Item>
                <ListGroup.Item>{id}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>{created.slice(0, 10)}</Card.Footer>
            <Button onClick={() => setAccepted(true)}>Accept</Button>
            <Button onClick={() => setRejected(true)}>Reject</Button>
          </>
        )}
      </Card>
    </Col>
  );
}

export default EnquiriesDetails;

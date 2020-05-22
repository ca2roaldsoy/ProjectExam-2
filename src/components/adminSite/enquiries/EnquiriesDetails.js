import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import EnquiryAnswer from "./EnquiryAnswer";

function EnquiriesDetails({ name, email, id, checkIn, checkOut, created }) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <Col lg={4}>
      {accepted || rejected ? (
        <EnquiryAnswer
          accepted={accepted}
          rejected={rejected}
          created={created}
        />
      ) : (
        <>
          <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>E-mail: {email}</ListGroup.Item>
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
          </Card>
        </>
      )}
    </Col>
  );
}

export default EnquiriesDetails;

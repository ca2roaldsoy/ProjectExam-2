import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function EnquiriesDetails({ name, email, id, checkIn, checkOut, created }) {
  return (
    <Col>
      <Card>
        <Card.Title>{id}</Card.Title>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {name}</ListGroup.Item>
            <ListGroup.Item>E-mail: {email} </ListGroup.Item>
            <ListGroup.Item>Check In: {checkIn.slice(0, 10)} </ListGroup.Item>
            <ListGroup.Item>Check Out: {checkOut.slice(0, 10)} </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </Card>
    </Col>
  );
}

export default EnquiriesDetails;

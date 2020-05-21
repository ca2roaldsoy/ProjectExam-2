import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function EnquiriesDetails() {
  return (
    <Card>
      <Card.Title>Name</Card.Title>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Name:</ListGroup.Item>
          <ListGroup.Item>E-mail:</ListGroup.Item>
          <ListGroup.Item>Check In:</ListGroup.Item>
          <ListGroup.Item>Check Out:</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Button>Accept</Button>
      <Button>Reject</Button>
    </Card>
  );
}

export default EnquiriesDetails;

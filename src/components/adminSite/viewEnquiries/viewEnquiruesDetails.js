import React from "react";
import Card, { ListGroup, Button } from "react-bootstrap";

function ViewEnquiruesDetails() {
  return (
    <Card>
      <Card.Title></Card.Title>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Button>Accept</Button>
      <Button>Reject</Button>
    </Card>
  );
}

export default ViewEnquiruesDetails;

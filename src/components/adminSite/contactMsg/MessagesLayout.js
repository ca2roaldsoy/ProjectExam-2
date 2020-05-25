import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function MessagesLayout() {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>From: </ListGroup.Item>
        <ListGroup.Item>E-mail: </ListGroup.Item>
        <ListGroup.Item>Message: </ListGroup.Item>
      </ListGroup>
      <Button>Respond</Button>
    </Card>
  );
}

export default MessagesLayout;

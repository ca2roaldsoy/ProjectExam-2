import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function MessagesLayout({ name, email, message }) {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>From: {name}</ListGroup.Item>
        <ListGroup.Item>E-mail: {email}</ListGroup.Item>
        <ListGroup.Item>Message: {message}</ListGroup.Item>
      </ListGroup>
      <Button>Respond</Button>
    </Card>
  );
}

export default MessagesLayout;

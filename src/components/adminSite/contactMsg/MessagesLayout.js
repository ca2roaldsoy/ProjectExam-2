import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MessageRespond from "./MessageRespond";

function MessagesLayout({ name, email, message }) {
  return (
    <Card as="section">
      <ListGroup variant="flush" as="ul">
        <ListGroup.Item as="li">
          <b>From:</b> {name}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <b>E-mail:</b> {email}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <b>Message:</b> {message}
        </ListGroup.Item>
      </ListGroup>
      <MessageRespond name={name} email={email} />
    </Card>
  );
}

export default MessagesLayout;

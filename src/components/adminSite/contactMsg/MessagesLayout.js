import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MessageRespond from "./MessageRespond";

function MessagesLayout({ name, email, message }) {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <b>From:</b> {name}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>E-mail:</b> {email}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Message:</b> {message}
        </ListGroup.Item>
      </ListGroup>
      <MessageRespond name={name} email={email} />
    </Card>
  );
}

export default MessagesLayout;

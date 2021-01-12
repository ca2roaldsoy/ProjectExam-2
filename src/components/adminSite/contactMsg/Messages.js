import React from "react";
import MessagesLayout from "./MessagesLayout";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function Messages() {

  // get storage and parse it
  const getStorage = JSON.parse(localStorage.getItem("message"));

  // if no enquiries, display message...
  function noMessages() {
    if (localStorage.getItem("message") === null) {
      return (
        <tr>
          <td>There is no messages yet</td>
        </tr>
      );
    } 
    // ...else
    return getStorage.map((contact, idx) => {

      const { name, email, message } = contact;
      return (
        <MessagesLayout
          key={idx}
          name={name}
          email={email}
          message={message}
          idx={idx}
        />
      );
    });
  }

  return (
    <Container>
          <h2>Messages</h2>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>From</th>
                <th>E-mail</th>
                <th>View Message</th>
              </tr>
            </thead>
            <tbody>{noMessages()}</tbody>
          </Table>
    </Container>
  );
}

export default Messages;

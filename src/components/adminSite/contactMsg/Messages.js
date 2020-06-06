import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import MessagesLayout from "./MessagesLayout";
import Loading from "../../spinner/Loading";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import ErrorHandler from "../../errorHandler/ErrorHandler";

function Messages() {
  const [contactMsg, setContactMsg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "contacts";
  const options = { headers };

  // Fetch contact messages
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setContactMsg(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // use spinner
  if (loading) {
    return <Loading />;
  }

  // if there are no messages, display message
  function noMsg() {
    if (contactMsg.length === 0) {
      return (
        <tr>
          <td>No messages</td>
        </tr>
      );
    }
    return contactMsg.map((contact) => {
      const { name, email, message, id } = contact;
      return (
        <MessagesLayout
          key={id}
          name={name}
          email={email}
          message={message}
          id={id}
        />
      );
    });
  }

  return (
    <Container>
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <h2>Messages</h2>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>From</th>
                <th>E-mail</th>
                <th>View Message</th>
              </tr>
            </thead>
            <tbody>{noMsg()}</tbody>
          </Table>{" "}
        </>
      )}
    </Container>
  );
}

export default Messages;

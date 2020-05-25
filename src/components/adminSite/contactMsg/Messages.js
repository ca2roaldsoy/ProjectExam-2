import React, { useEffect, useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { BASE_URL, headers } from "../../../constants/api";
import MessagesLayout from "./MessagesLayout";

function Messages() {
  const [contactMsg, setContactMsg] = useState([]);

  const url = BASE_URL + "contacts";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((repsonse) => repsonse.json())
      .then((data) => {
        setContactMsg(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function noMsg() {
    if (contactMsg.length === 0) {
      return <p>No messages</p>;
    }
    return contactMsg.map((contact) => {
      const { name, email, message, id } = contact;
      return (
        <MessagesLayout key={id} name={name} email={email} message={message} />
      );
    });
  }

  return (
    <>
      <h1>Messages</h1>
      <CardDeck>{noMsg()}</CardDeck>
    </>
  );
}

export default Messages;

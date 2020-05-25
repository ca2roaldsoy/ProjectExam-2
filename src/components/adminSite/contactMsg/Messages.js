import React, { useEffect } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { BASE_URL, headers } from "../../../constants/api";

function Messages() {
  const url = BASE_URL + "contacts";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((repsonse) => repsonse.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  return <div>hello</div>;
}

export default Messages;

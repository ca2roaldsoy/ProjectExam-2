import React from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function DeleteEstDetail({ name, id }) {
  const history = useHistory();

  function deleteEst() {
    const url = BASE_URL + "establishments/" + id;

    const options = { headers, method: "DELETE" };

    fetch(url, options);
    history.push("./deleteEstablishment");
  }

  return (
    <>
      <h2>{name}</h2>
      <Button onClick={deleteEst}>Delete establishment</Button>
    </>
  );
}

export default DeleteEstDetail;

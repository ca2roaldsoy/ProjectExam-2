import React, { useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function DeleteEstDetail({ name, id, created }) {
  const [deleteEst, setDeleteEst] = useState(true);

  const history = useHistory();

  function deleteEstablishment() {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options).then(setDeleteEst(false));
    history.push("./deleteEstablishment");
  }

  return (
    <Col sm={3} as="section">
      <Card style={deleteEst ? { display: "flex" } : { display: "none" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{created.slice(0, 10)}</Card.Text>
        <Button onClick={deleteEstablishment}>Delete establishment</Button>
      </Card>
    </Col>
  );
}

export default DeleteEstDetail;

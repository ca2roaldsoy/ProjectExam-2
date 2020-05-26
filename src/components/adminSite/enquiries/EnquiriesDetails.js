import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";

function EnquiriesDetails({ name, email, id, checkIn, checkOut, created }) {
  const history = useHistory();

  const manageEnquiry = (e) => {
    if (e.target.textContent === "Accept") {
      const url = BASE_URL + "enquiries/" + id;
      const options = { headers, method: "DELETE" };

      fetch(url, options);
      history.push("./enquiries");
    }
  };

  return (
    <Col>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>E-mail: {email} </ListGroup.Item>
            <ListGroup.Item>Check In: {checkIn.slice(0, 10)} </ListGroup.Item>
            <ListGroup.Item>Check Out: {checkOut.slice(0, 10)} </ListGroup.Item>
            <ListGroup.Item>{id}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>{created.slice(0, 10)}</Card.Footer>
        <Button className="accept" onClick={(e) => manageEnquiry(e)}>
          Accept
        </Button>
        <Button onClick={(e) => manageEnquiry(e)}>Reject</Button>
      </Card>
    </Col>
  );
}

export default EnquiriesDetails;

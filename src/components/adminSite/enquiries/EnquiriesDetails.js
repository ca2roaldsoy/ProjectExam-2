import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import EnquiryAnswer from "./EnquiryAnswer";
import PropTypes from "prop-types";

function EnquiriesDetails({ name, email, id, checkIn, checkOut, created }) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <Col lg={4} as="section">
      {accepted || rejected ? (
        <EnquiryAnswer
          accepted={accepted}
          rejected={rejected}
          created={created}
        />
      ) : (
        <>
          <Card>
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Body>
              <ListGroup variant="flush" as="ul">
                <ListGroup.Item as="li">E-mail: {email}</ListGroup.Item>
                <ListGroup.Item as="li">
                  Check In: {checkIn.slice(0, 10)}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Check Out: {checkOut.slice(0, 10)}
                </ListGroup.Item>
                <ListGroup.Item as="li">{id}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>{created.slice(0, 10)}</Card.Footer>
            <Button onClick={() => setAccepted(true)} role="button">
              Accept
            </Button>
            <Button onClick={() => setRejected(true)} role="button">
              Reject
            </Button>
          </Card>
        </>
      )}
    </Col>
  );
}

EnquiriesDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default EnquiriesDetails;

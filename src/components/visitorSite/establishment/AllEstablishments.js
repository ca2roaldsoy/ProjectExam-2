import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AllEstablishments({ image, name, maxGuests, selfCatering, price }) {
  return (
    <>
      <Col sm={5}>
        <Card.Img src={image} alt={name} />
      </Col>

      <Card.Body>
        <Col sm={5}>
          <Card.Title>{name}</Card.Title>

          <div className="d-flex">
            <Badge variant="primary">MaxGuests: {maxGuests}</Badge>

            <Badge
              style={{
                backgroundColor: selfCatering ? "green" : "red",
              }}
            >
              selfCatering: {selfCatering ? "Yes" : "No"}
            </Badge>
          </div>

          <Card.Img src={Map} alt="map icon" />
        </Col>
      </Card.Body>

      <Col sm={2}>
        <Card.Text>$ {price}</Card.Text>
        <Button>View</Button>
      </Col>
    </>
  );
}

export default AllEstablishments;

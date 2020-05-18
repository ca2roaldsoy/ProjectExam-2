import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

function AllEstablishments({
  id,
  image,
  name,
  maxGuests,
  selfCatering,
  price,
}) {
  function updatePrice() {
    let newPrice = Math.ceil((price * 70) / 100);
    let roomsLeft = Math.floor(maxGuests * 2);

    if (price < 100) {
      return (
        <>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>$ {newPrice}</Card.Text>
          {deal()}
        </>
      );
    }

    function deal() {
      if (newPrice < 50) {
        return (
          <>
            <Card.Text>Don't miss out!</Card.Text>
            <Card.Text>
              There are only: <strong>{roomsLeft}</strong> rooms left
            </Card.Text>
          </>
        );
      }
    }
    return <Card.Text>$ {price}</Card.Text>;
  }

  return (
    <Card>
      <Row>
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
          {updatePrice()}
          <Button>
            <Link to={"establishment/" + id}> View </Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default AllEstablishments;

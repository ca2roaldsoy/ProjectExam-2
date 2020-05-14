import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);

  const { id } = useParams();
  const url = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
      });
  }, [url]);

  return (
    <Card>
      <Row>
        <Col sm={5}>
          <Card.Img src={establishment.image} alt={establishment.name} />
        </Col>

        <Card.Body>
          <Col sm={5}>
            <Card.Title>{establishment.name}</Card.Title>

            <Badge variant="primary">
              MaxGuests: {establishment.maxGuests}
            </Badge>

            <Badge variant="primary">
              selfCatering: {establishment.selfCatering ? "Yes" : "No"}
            </Badge>

            <Card.Img src={Map} alt="map icon" />
          </Col>
        </Card.Body>

        <Col sm={2}>
          <Card.Text>$ {establishment.price}</Card.Text>
          <Button>View</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Establishment;

import React, { useEffect, useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AllEstablishments from "./AllEstablishments";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);

  const url = BASE_URL + "establishments";

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
      });
  }, [url]);

  function allEstablishments() {
    return establishment.map((hotels) => {
      const { id, image, name, maxGuests, selfCatering, price } = hotels;

      return (
        <AllEstablishments
          image={image}
          name={name}
          maxGuests={maxGuests}
          selfCatering={selfCatering}
          price={price}
          key={id}
        />
      );
    });
  }

  return (
    <Card>
      <Row>{allEstablishments()}</Row>
    </Card>
  );
}
export default Establishment;

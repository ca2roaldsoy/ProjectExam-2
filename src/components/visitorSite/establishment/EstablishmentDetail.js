import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Loading from "../../spinner/Loading";
import { Link } from "react-router-dom";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const url = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  // Discounts
  function newPrice() {
    let newPrice = Math.ceil((establishment.price * 70) / 100);

    if (establishment.price < 100) {
      return (
        <>
          <Card.Text>$ {newPrice}</Card.Text>
        </>
      );
    }
  }

  return (
    <Card>
      <Card.Title>{establishment.name}</Card.Title>
      <Card.Body>
        <Card.Img src={establishment.image} alt={establishment.name} />

        <div className="d-flex">
          <Badge variant="primary">MaxGuests: {establishment.maxGuests}</Badge>
          <Badge
            style={{
              backgroundColor: establishment.selfCatering ? "green" : "red",
            }}
          >
            selfCatering: {establishment.selfCatering ? "Yes" : "No"}
          </Badge>
          <Card.Text>{establishment.email}</Card.Text>
        </div>

        <Card.Text>{establishment.description}</Card.Text>
        <Card.Text>$ {establishment.price}</Card.Text>
        {newPrice()}

        <div className="d-flex">
          <Link to="../make-enquiries">
            <Button> Book </Button>
          </Link>
          <Card.Img src={Map} alt="map icon" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Establishment;

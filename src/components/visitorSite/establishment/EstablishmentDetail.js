import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Loading from "../../spinner/Loading";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Discounts
  function newPrice() {
    let newPrice = Math.ceil((establishment.price * 70) / 100);

    if (establishment.price < 100) {
      return (
        <>
          <Card.Text className="establishmentDetail__price--new">
            $ {newPrice}
          </Card.Text>
        </>
      );
    }
  }

  return (
    <Container className="establishmentDetailContainer">
      <Card as="main" role="main" className="establishmentDetail">
        <Col sm={12}>
          <Card.Title as="h2" className="establishmentDetail__title">
            {establishment.name}
          </Card.Title>
        </Col>
        <Card.Body className="establishmentDetail__body">
          <Col sm={12}>
            <Card.Img
              src={establishment.image}
              alt={establishment.name}
              role="img"
              className="establishmentDetail__img"
            />
          </Col>

          <Col sm={12} className="establishmentDetail__badges">
            <Col sm={6} md={4}>
              <Badge
                variant="primary"
                className="establishmentDetail__badges--maxGuests"
              >
                Max Guests: {establishment.maxGuests}
              </Badge>
            </Col>

            <Col sm={6} md={4}>
              <Badge
                style={{
                  backgroundColor: establishment.selfCatering
                    ? "#5EBB47"
                    : "#FF333A",
                }}
                className="establishmentDetail__badges--selfCatering"
              >
                Self Catering: {establishment.selfCatering ? "Yes" : "No"}
              </Badge>
            </Col>

            <Col sm={12} md={4}>
              <Card.Text className="establishmentDetail__email">
                {establishment.email}
              </Card.Text>
            </Col>
          </Col>

          <Col sm={12}>
            <Card.Text className="establishmentDetail__desc">
              {establishment.description}
            </Card.Text>
          </Col>

          <Col sm={12}>
            <Card.Text className="establishmentDetail__price">
              $ {establishment.price}
            </Card.Text>
            {newPrice()}

            <div className="d-flex">
              <Link to={"../make-enquiries/" + establishment.name + "/" + id}>
                <Button role="button" className="establishmentDetail__btn">
                  Book
                </Button>
              </Link>
              <Card.Img
                src={Map}
                alt="map icon"
                className="establishmentDetail__mapIcon"
              />
            </div>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Establishment;

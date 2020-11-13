import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../../../images/icons/map_v1.png";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";

// from react bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {acommodations} from "../../../constants/establishments";

function Establishment() {

  const { id } = useParams();

  return (
    <div>
          {acommodations.map((hotels) => {
            if (hotels.id === id) {

  let discountPrice = Math.ceil((hotels.price * 70) / 100 - 5); // calculate discount price
  let decrease = hotels.price - discountPrice;
  let discount = Math.ceil((decrease / hotels.price) * 100); // calculate discount
  let roomsLeft = Math.ceil(hotels.maxGuests / 3); // calculate avaiable rooms left

  // Discounts
  function newPrice() {
    if (hotels.price < 100) {
      return (
        <>
          <Card.Text className="establishmentDetail__price--old">
            NOK {hotels.price}
          </Card.Text>
          <Card.Text className="establishmentDetail__price--new">
            NOK {discountPrice}
          </Card.Text>
          <Card.Text className="establishmentDetail__price--discount">
            Save: {discount}&#37;
          </Card.Text>
        </>
      );
    }

    return (
      <Card.Text className="establishmentDetail__price--org text-center">
        <strong>Total: NOK {hotels.price}</strong>
      </Card.Text>
    );
  }

  function rooms() {
    if (discountPrice < 50) {
      return (
        <Col sm={12} className="establishmentDetail__rooms">
          <Card.Text>Hurry!</Card.Text>
          <Card.Text>
            There are only: <strong>{roomsLeft}</strong> room(s) left
          </Card.Text>
        </Col>
      );
    }
  }

  return (
        <article key={hotels.id}>
          <BreadCrumbs crumb={4} estname={hotels.name} />
          <Container className="establishmentDetailContainer" as="section">
            <Card className="establishmentDetail">
              <Col sm={12} className="establishmentDetail__top">
                <Col sm={12} lg={8} className="establishmentDetail__img">
                  <Card.Img
                    src={hotels.image}
                    alt={hotels.name}
                    role="img"
                    className="establishmentDetail__img--img"
                  />
                </Col>

                <Col sm={12} lg={4} className="establishmentDetail__checkout">
                  <Col sm={12} className="establishmentDetail__price">
                    {newPrice()}
                  </Col>

                  {rooms()}

                  <Col sm={12} className="establishmentDetail__btn">
                    <Link
                      to={"../make-enquiries/" + hotels.name + "/" + hotels.id}
                    >
                      <Button
                        role="button"
                        className="establishmentDetail__btn--text"
                      >
                        Book
                      </Button>
                    </Link>
                  </Col>
                </Col>
              </Col>
              <Card.Body className="establishmentDetail__body">
                <Col sm={12} className="establishmentDetail__badges">
                  <Col sm={3}>
                    <Badge
                      variant="primary"
                      className="establishmentDetail__badges--maxGuests"
                    >
                      Max Guests: {hotels.maxGuests}
                    </Badge>
                  </Col>

                  <Col sm={3}>
                    <Badge className="establishmentDetail__badges--selfCatering">
                      Self Catering: {hotels.selfCatering ? "Yes" : "No"}
                    </Badge>
                  </Col>

                  <Col sm={3}>
                    <Card.Text className="establishmentDetail__email">
                      {hotels.email}
                    </Card.Text>
                  </Col>
                </Col>

                <Col sm={12} className="establishmentDetail__info">
                  <Card.Title as="h2" className="establishmentDetail__title">
                    {hotels.name}
                  </Card.Title>

                  <Card.Text className="establishmentDetail__desc">
                    {hotels.description}
                  </Card.Text>

                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <p>
                          Latitude <br /> {hotels.lat}
                        </p>
                        <p>
                          Longitude <br /> {hotels.lng}
                        </p>
                      </Tooltip>
                    }
                  >
                    <Card.Img
                      src={Map}
                      alt="map icon"
                      className="establishmentDetail__mapIcon"
                    />
                  </OverlayTrigger>
                </Col>
              </Card.Body>
            </Card>
          </Container>
          <Footer />
        </article>
      )}
     return null;
    })}

    </div>
  )
} 
  
export default Establishment;

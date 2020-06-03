import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import InfoIcon from "../../../images/icons/information.png";
import Image from "react-bootstrap/Image";

function AllEstablishments({
  id,
  image,
  name,
  maxGuests,
  selfCatering,
  price,
}) {
  let newPrice = Math.ceil((price * 70) / 100 - 5);
  let roomsLeft = Math.ceil(maxGuests / 3);
  let decrease = price - newPrice;
  let discount = Math.ceil((decrease / price) * 100);

  // Discounts
  function updatePrice() {
    if (price < 100) {
      return (
        <>
          <Card.Text className="establishment__price--discount">
            Save: {discount}&#37;
          </Card.Text>
          <Card.Text className="establishment__price--old">$ {price}</Card.Text>
          <Card.Text className="establishment__price--new">
            <strong>$ {newPrice}</strong>
          </Card.Text>
        </>
      );
    }
    return (
      <Card.Text className="establishment__price--org">
        <strong>$ {price}</strong>
      </Card.Text>
    );
  }

  // Display few rooms left
  function deal() {
    if (newPrice < 50) {
      return (
        <div className="establishment__deal">
          <Card.Text>Don't miss out!</Card.Text>
          <Card.Text>
            There are only: <strong>{roomsLeft}</strong> room(s) left
          </Card.Text>
        </div>
      );
    }
  }

  return (
    <Card as="section" className="establishment">
      <Row>
        <Col sm={12} lg={5} className="establishment__img">
          <Card.Img src={image} alt={name} role="img" />
        </Col>

        <Col sm={8} md={6} lg={5}>
          <Card.Body>
            <Card.Title className="establishment__title" as="h3">
              {name}
            </Card.Title>

            <div className="establishment__badges">
              <Badge className="establishment__badges--maxGuests">
                Max Guests: {maxGuests}
              </Badge>
              <Badge
                style={{
                  backgroundColor: selfCatering ? "#5EBB47" : "#FF333A",
                }}
                className="establishment__badges--selfCatering"
              >
                Self Catering: {selfCatering ? "Yes" : "No"}
              </Badge>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    <h6>Self Catering:</h6>
                    <p>
                      Whether or not guests have facilities for making their own
                      meals and cooking.
                    </p>
                  </Tooltip>
                }
              >
                <Image
                  src={InfoIcon}
                  alt="information icon"
                  fluid
                  className="img-responsive establishment__badges--infoIcon"
                />
              </OverlayTrigger>
            </div>

            {deal()}

            <Card.Img
              src={Map}
              alt="map icon"
              className="establishment__mapIcon"
            />
          </Card.Body>
        </Col>

        <Col sm={4} md={6} lg={2} as="section" className="establishment__price">
          {updatePrice()}
          <Button role="button" className="establishment__btn">
            <Link
              to={"establishment/" + id}
              className="establishment__btn--text"
            >
              View
            </Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

AllEstablishments.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  selfCatering: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default AllEstablishments;

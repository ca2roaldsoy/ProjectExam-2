import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Loading from "../../spinner/Loading";
import { Link } from "react-router-dom";
import Map from "../../../images/icons/map_v1.png";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import ErrorHandler from "../../errorHandler/ErrorHandler";

// from react bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const { id } = useParams();
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        // check if response returns ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((data) => {
        console.log(data);
        setEstablishment(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorHandle(true);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // loading
  if (loading) {
    return <Loading />;
  }

  let discountPrice = Math.ceil((establishment.price * 70) / 100); // calculate discount price
  let decrease = establishment.price - discountPrice;
  let discount = Math.ceil((decrease / establishment.price) * 100); // calculate discount
  let roomsLeft = Math.ceil(establishment.maxGuests / 3); // calculate avaiable rooms left

  // Discounts
  function newPrice() {
    if (establishment.price < 100) {
      return (
        <>
          <Card.Text className="establishmentDetail__price--old">
            NOK {establishment.price}
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
        <strong>Total: NOK {establishment.price}</strong>
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
    <>
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <article>
          <BreadCrumbs crumb={4} estname={establishment.name} />
          <Container className="establishmentDetailContainer">
            <Card as="main" role="main" className="establishmentDetail">
              <Col sm={12} className="establishmentDetail__top">
                <Col sm={12} lg={8} className="establishmentDetail__img">
                  <Card.Img
                    src={establishment.image}
                    alt={establishment.name}
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
                      to={"../make-enquiries/" + establishment.name + "/" + id}
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
                      Max Guests: {establishment.maxGuests}
                    </Badge>
                  </Col>

                  <Col sm={3}>
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

                  <Col sm={3}>
                    <Card.Text className="establishmentDetail__email">
                      {establishment.email}
                    </Card.Text>
                  </Col>
                </Col>

                <Col sm={12} className="establishmentDetail__info">
                  <Card.Title as="h2" className="establishmentDetail__title">
                    {establishment.name}
                  </Card.Title>

                  <Card.Text className="establishmentDetail__desc">
                    {establishment.description}
                  </Card.Text>

                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <p>
                          Latitude <br /> {establishment.lat}
                        </p>
                        <p>
                          Longitude <br /> {establishment.lng}
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
    </>
  );
}

export default Establishment;

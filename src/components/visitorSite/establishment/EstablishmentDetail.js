import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Card from "react-bootstrap/Card";
import Loading from "../../spinner/Loading";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Map from "../../../images/icons/map_v1.png";
import AcceptIcon from "../../../images/accept.png";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import ErrorHandler from "../../errorHandler/ErrorHandler";

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
          setLoading(false);
          setErrorHandle(true);
        }
      })
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // loading
  if (loading) {
    return <Loading />;
  }

  // Discounts
  function newPrice() {
    let newPrice = Math.ceil((establishment.price * 70) / 100);
    let decrease = establishment.price - newPrice;
    let discount = Math.ceil((decrease / establishment.price) * 100);

    if (establishment.price < 100) {
      return (
        <>
          <Card.Text className="establishmentDetail__price--old">
            NOK {establishment.price}
          </Card.Text>
          <Card.Text className="establishmentDetail__price--new">
            NOK {newPrice}
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

  return (
    <>
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <article>
          <BreadCrumbs crumb={4} estname={establishment.name} />
          <Container className="establishmentDetailContainer">
            <section className="establishmentDetail__accept">
              <Image src={AcceptIcon} alt="v" fluid />
              No booking fees
              <Image src={AcceptIcon} alt="v" fluid />
              100% Customer Satisfaction
              <Image src={AcceptIcon} alt="v" fluid />
              Voucher Acceptence
            </section>

            <Card as="main" role="main" className="establishmentDetail">
              <Col sm={12} className="establishmentDetail__img">
                <Card.Img
                  src={establishment.image}
                  alt={establishment.name}
                  role="img"
                  className="establishmentDetail__img--img"
                />
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

                  <Card.Img
                    src={Map}
                    alt="map icon"
                    className="establishmentDetail__bottom--mapIcon"
                  />
                </Col>

                <Col sm={12} className="establishmentDetail__checkout">
                  <Col sm={12} lg={6} className="establishmentDetail__price">
                    {newPrice()}
                  </Col>

                  <Col sm={12} lg={6} className="establishmentDetail__bottom">
                    <Link
                      to={"../make-enquiries/" + establishment.name + "/" + id}
                    >
                      <Button
                        role="button"
                        className="establishmentDetail__bottom--btn"
                      >
                        Book
                      </Button>
                    </Link>
                  </Col>
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

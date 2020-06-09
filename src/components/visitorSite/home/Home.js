import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Search from "./Search";
import DropDownResult from "./DropDownResult";
import BrowseAll from "./BrowseAll";
import Qualities from "./Qualities";
import Footer from "../footer/Footer";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import Loading from "../../spinner/Loading";

// carousel
import { Responsive } from "../../../constants/responsiveCarousel";
import PopularPlaces from "./carousel/PopularPlaces";
import Carousel from "react-multi-carousel";
import ExploreBergen from "./carousel/ExploreBergen";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

// import images
import ImgTop from "../../../images/bergen/bg-15.jpg";
import Button from "react-bootstrap/Button";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchEstablishments, setSearchEstablishments] = useState([]);
  const [establishments, setEstablishments] = useState([]);
  const [errorHandle, setErrorHandle] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const url = BASE_URL + "establishments";
  const options = { headers };

  // fetch establishments
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
      .then((json) => {
        setEstablishments(json);
        setSearchEstablishments(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        setErrorHandle(true);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // use spinner
  if (loading) {
    return <Loading />;
  }

  // filter establishment after search
  const findEstablishment = (e) => {
    const lowerCaseValue = e.target.value.toLowerCase();
    const filterEstablishments = establishments.filter((establish) => {
      const lowerCaseEst = establish.name.toLowerCase();

      if (lowerCaseEst.includes(lowerCaseValue)) {
        return true;
      }
      return false;
    });
    setSearchEstablishments(filterEstablishments);
  };

  // if no search result, display message
  function results() {
    if (searchEstablishments.length === 0) {
      return <p>sorry, no results found</p>;
    }
  }

  function searchModal() {
    // open dropdown search result
    if (isOpen) {
      return (
        <Modal.Header className="search__results">
          <Button onClick={handleClose} className="search__results--close">
            x
          </Button>
          <Modal.Title
            as="h3"
            className="text-center searchContainer__title"
            style={{ color: "#000" }}
          >
            Find Accommodations
          </Modal.Title>
          <Search handleSearch={findEstablishment} />
          {results()}

          <Modal.Body>
            {searchEstablishments.map((establishment) => {
              return (
                <DropDownResult
                  key={establishment.id}
                  name={establishment.name}
                  idx={establishment.id}
                />
              );
            })}
          </Modal.Body>
        </Modal.Header>
      );
    }
  }

  // popular places section
  function popular() {
    return (
      <>
        <section className="carousel">
          <div className="carousel__title--before"></div>
          <h2 className="carousel__title">Popular Places</h2>
          <div className="carousel__title--after"></div>
        </section>

        <Carousel responsive={Responsive} showDots={true}>
          {establishments.slice(5, 9).map((popular) => {
            const { name, image, id, price } = popular;
            return (
              <PopularPlaces
                key={id}
                place={name}
                image={image}
                price={price}
              />
            );
          })}
        </Carousel>
      </>
    );
  }

  // explore bergen section
  function exploreBergen() {
    return (
      <>
        <div className="carousel">
          <div className="carousel__title--before"></div>
          <h2 className="carousel__title">Explore Bergen</h2>
          <div className="carousel__title--after"></div>
        </div>
        <ExploreBergen />
      </>
    );
  }

  return (
    <Row className="home">
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <Image src={ImgTop} alt="Bergen" className="homeImgTop" />
          <Container>
            <section className="searchContainer">
              <h2 className="text-center searchContainer__title">
                Accommodations in Bergen
              </h2>
              <Button onClick={handleShow} className="search__btn">
                Start searching here
              </Button>
            </section>

            <Modal show={isOpen} onHide={handleClose}>
              {searchModal()}
            </Modal>

            {/* Popular Places */}
            {popular()}
          </Container>
          {/* Browse All Accommodation Section */}
          <BrowseAll />
          {/* Explore Bergen */}
          <Container className="exploreBergen">{exploreBergen()}</Container>
          <Qualities />
          <Footer />
        </>
      )}
    </Row>
  );
}

export default Home;

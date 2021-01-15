import React, { useState, useEffect } from "react";
import {acommodations} from "../../../constants/establishments";
import Search from "./Search";
import DropDownResult from "./DropDownResult";
import BrowseAll from "./BrowseAll";
import Qualities from "./Qualities";
import Footer from "../footer/Footer";

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
import Button from "react-bootstrap/Button";

// import images
import ImgTop from "../../../images/bergen/bg-15.jpg";

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [searchEstablishments, setSearchEstablishments] = useState([]);

  function setLocalStorage() {
    // add the array to local storage
    localStorage.setItem("acommodation", JSON.stringify(acommodations))
 }

 useEffect(() => {
  setLocalStorage();
 }, [])

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("acommodation"));
      setSearchEstablishments(getStorage);
  }, []);

  // open and close search modal
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  function establishementsImg() {
    return acommodations.slice(1, 5).map((acc, i) => {
      const { image, name } = acc;

      return <PopularPlaces key={i} image={image} place={name} />;
    });
  }

  // filter establishment after search
  const findEstablishment = (e) => {
    const lowerCaseValue = e.target.value.toLowerCase();
    const filterEstablishments = searchEstablishments.filter((acco) => {
      const lowerCaseEst = acco.name.toLowerCase();

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
        <Modal.Header className="search__results" closeButton>
          <Button onClick={handleClose} className="search__results--close">
            <span aria-hidden="true">x</span>
            <span className="sr-only">Close</span> {/* for screen readers */}
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
            {establishementsImg()}
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
    <Row className="home" as="article" role="article">
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
          <Container className="exploreBergen" as="section">
            {exploreBergen()}
          </Container>
          <Qualities />
          <Footer />
    </Row>
  );
}

export default Home;

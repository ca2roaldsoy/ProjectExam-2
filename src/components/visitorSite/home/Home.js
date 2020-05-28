import React, { useEffect, useState } from "react";
import ExploreBergen from "./carousel/ExploreBergen";
import ImgTop from "../../../images/bergen/bg_img_v2.jpg";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import { BASE_URL, headers } from "../../../constants/api";
import Search from "./Search";
import DropDownResult from "./DropDownResult";
import PopularPlaces from "./carousel/PopularPlaces";
import Carousel from "react-multi-carousel";
import BrowseAll from "./BrowseAll";
import Loading from "../../spinner/Loading";
import { Responsive } from "../../../constants/responsiveCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchEstablishments, setSearchEstablishments] = useState([]);
  const [establishments, setEstablishments] = useState([]);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setEstablishments(json);
        setSearchEstablishments(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // filter establishment after search
  const findEstablishment = (e) => {
    const lowerCaseValue = e.target.value.toLowerCase();
    const filterEstablishments = establishments.filter((establish) => {
      const lowerCaseEst = establish.name.toLowerCase();

      if (lowerCaseEst.includes(lowerCaseValue)) {
        setIsOpen(true);
        return true;
      }
      return false;
    });
    setSearchEstablishments(filterEstablishments);
  };

  // use spinner
  if (loading) {
    return <Loading />;
  }

  // if no search result, display message
  function results() {
    if (searchEstablishments.length === 0) {
      return <p>sorry, no results found</p>;
    }

    // open dropdown search result
    if (isOpen) {
      return searchEstablishments.map((establishment) => {
        return (
          <DropDownResult
            key={establishment.id}
            name={establishment.name}
            idx={establishment.id}
          />
        );
      });
    }
  }

  return (
    <Row className="home">
      <Image
        src={ImgTop}
        alt="man on hike looking over Bergen"
        className="homeImgTop"
      />
      <Container>
        <Search handleSearch={findEstablishment} />
        {results()}

        <div className="carousel">
          <div className="carousel__title--before"></div>
          <h2 className="carousel__title">Popular Places</h2>
          <div className="carousel__title--after"></div>
        </div>
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
      </Container>
      <BrowseAll />
      <Container>
        <div className="carousel">
          <div className="carousel__title--before"></div>
          <h2 className="carousel__title">Explore Bergen</h2>
          <div className="carousel__title--after"></div>
        </div>
        <ExploreBergen />
      </Container>
      <Footer />
    </Row>
  );
}

export default Home;

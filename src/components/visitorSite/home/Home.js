import React, { useEffect, useState } from "react";
import ExploreBergen from "./ExploreBergen";
import ImgTop from "../../../images/bergen/bg_img_v2.jpg";
import ImgBlur from "../../../images/bergen/bergen_blur_v2.jpg";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";
import Search from "./Search";
import DropDownResult from "./DropDownResult";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PopularPlaces from "./PopularPlaces";
import Carousel from "react-multi-carousel";

function Home() {
  const [establishments, setEstablishments] = useState([]);
  const [searchEstablishments, setSearchEstablishments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const responsive = {
    lg: {
      breakpoint: { max: 2048, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const url = BASE_URL + "establishments";

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setEstablishments(data);
        setSearchEstablishments(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

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

  function results() {
    if (searchEstablishments.length === 0) {
      return <p>sorry, no results found</p>;
    }

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
    <>
      <Image src={ImgTop} alt="man on hike looking over Bergen" fluid />

      <Search handleSearch={findEstablishment} />
      {results()}

      <h2>Popular Places</h2>
      <Carousel responsive={responsive} showDots={true}>
        {establishments.map((popular) => {
          const { name, image, id } = popular;
          return <PopularPlaces key={id} place={name} image={image} />;
        })}
      </Carousel>

      <h2>Not sure where to stay?</h2>
      <Button>
        <Link to={"./establishment"}>Browse all accommodations</Link>
      </Button>
      <Image src={ImgBlur} alt="panorama view over Bergen" fluid />
      <h2>Explore Bergen</h2>
      <ExploreBergen />
      <Footer />
    </>
  );
}

export default Home;

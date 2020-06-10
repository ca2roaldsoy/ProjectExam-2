import React from "react";
import HomeCarousel from "./HomeCarousel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Popular Places Carousel
function PopularPlaces({ place, image, id }) {
  return (
    <Link to={"establishment/" + id} style={{ color: "#000" }}>
      <HomeCarousel place={place} image={image} />
    </Link>
  );
}

PopularPlaces.propTypes = {
  place: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PopularPlaces;

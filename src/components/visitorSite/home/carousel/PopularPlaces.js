import React from "react";
import HomeCarousel from "./HomeCarousel";
import PropTypes from "prop-types";

// Popular Places Carousel
function PopularPlaces({ place, image }) {
  console.log(image);
  return <HomeCarousel place={place} image={image} />;
}

PopularPlaces.propTypes = {
  place: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PopularPlaces;

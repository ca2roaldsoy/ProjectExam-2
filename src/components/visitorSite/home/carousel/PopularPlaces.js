import React from "react";
import HomeCarousel from "./HomeCarousel";

// Popular Places Carousel
function PopularPlaces({ place, image }) {
  return <HomeCarousel place={place} image={image} />;
}

export default PopularPlaces;

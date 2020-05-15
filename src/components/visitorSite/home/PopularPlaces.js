import React from "react";
import HomeCarousel from "./HomeCarousel";

function PopularPlaces({ place, image }) {
  return <HomeCarousel place={place} image={image} />;
}

export default PopularPlaces;

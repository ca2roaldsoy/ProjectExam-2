import React from "react";
import Carousel from "react-multi-carousel";
import { BergenImg } from "../../../../constants/BergenImg";
import HomeCarousel from "./HomeCarousel";
import { Responsive } from "../../../../constants/responsiveCarousel";

// Explore Bergen Carousel
function ExploreBergen() {
  function bergenImg() {
    return BergenImg.map((images, i) => {
      const { src, text, place } = images;

      return <HomeCarousel key={i} place={place} image={src} text={text} />;
    });
  }

  return (
    <Carousel responsive={Responsive} showDots={true}>
      {bergenImg()}
    </Carousel>
  );
}

export default ExploreBergen;

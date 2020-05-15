import React from "react";
import Carousel from "react-multi-carousel";
import { BergenImg } from "./BergenImg";
import BergenCarousel from "./BergenCarousel";

function ExploreBergen() {
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

  function bergenImg() {
    return BergenImg.map((images, i) => {
      const { src, text, place } = images;

      return <BergenCarousel key={i} place={place} image={src} text={text} />;
    });
  }

  return (
    <Carousel responsive={responsive} showDots={true}>
      {bergenImg()}
    </Carousel>
  );
}

export default ExploreBergen;

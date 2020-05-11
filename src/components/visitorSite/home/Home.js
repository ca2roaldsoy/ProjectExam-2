import React from "react";
import Carousel from "react-multi-carousel";

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

function Home() {
  return (
    <Carousel responsive={responsive} showDots={true}>
      <div>
        <h2>1</h2>
      </div>
      <div>
        <h2>2</h2>
      </div>
      <div>
        <h2>3</h2>
      </div>
      <div>
        <h2>4</h2>
      </div>
      <div>
        <h2>5</h2>
      </div>
    </Carousel>
  );
}

export default Home;

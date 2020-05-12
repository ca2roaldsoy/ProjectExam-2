import React from "react";
import ExploreBergen from "./ExploreBergen";
import ImgTop from "../../../images/bergen/bg_img.jpg";
import ImgBlur from "../../../images/bergen/bergen_blur.jpg";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <>
      <Image src={ImgTop} alt="man on hike looking over Bergen" fluid />
      <Image src={ImgBlur} alt="panorama view over Bergen" fluid />
      <h2>Explore Bergen</h2>
      <ExploreBergen />
    </>
  );
}

export default Home;

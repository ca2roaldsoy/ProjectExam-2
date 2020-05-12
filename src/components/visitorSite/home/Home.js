import React from "react";
import ExploreBergen from "./ExploreBergen";
import ImgTop from "../../../images/bergen/bg_img_v2.jpg";
import ImgBlur from "../../../images/bergen/bergen_blur_v2.jpg";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <Image src={ImgTop} alt="man on hike looking over Bergen" fluid />
      <Image src={ImgBlur} alt="panorama view over Bergen" fluid />
      <h2>Explore Bergen</h2>
      <ExploreBergen />
      <Footer />
    </>
  );
}

export default Home;

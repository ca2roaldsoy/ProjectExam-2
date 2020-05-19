import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ImgBlur from "../../../images/bergen/bergen_blur_v2.jpg";

// browse all establishments
function BrowseAll() {
  return (
    <>
      <h2>Not sure where to stay?</h2>
      <Button>
        <Link to={"./establishment"}>Browse all accommodations</Link>
      </Button>
      <Image src={ImgBlur} alt="panorama view over Bergen" fluid />
    </>
  );
}

export default BrowseAll;

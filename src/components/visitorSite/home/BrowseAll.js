import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ImgBlur from "../../../images/bergen/bergen_blur_v4.jpg";
import Card from "react-bootstrap/Card";

// browse all establishments
function BrowseAll() {
  return (
    <Card className="browseAll">
      <Card.Img src={ImgBlur} className="browseAll__img" />
      <Card.ImgOverlay className="browseAll__overlay">
        <Card.Title as="h2" className="browseAll__overlay--title">
          Not sure where to stay?
        </Card.Title>
        <Link to={"./establishment"}>
          <Button role="button" className="browseAll__overlay--btn">
            Browse all accommodations
          </Button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default BrowseAll;

import React from "react";
import Figure from "react-bootstrap/Figure";

function HomeCarousel({ image, text, place }) {
  return (
    <Figure>
      <Figure.Image src={image} alt={place} />
      {place}
      <Figure.Caption>{text}</Figure.Caption>
    </Figure>
  );
}

export default HomeCarousel;

import React from "react";
import Figure from "react-bootstrap/Figure";

function BergenCarousel({ image, text, place }) {
  return (
    <Figure>
      <Figure.Image src={image} alt={place} />
      {place}
      <Figure.Caption>{text}</Figure.Caption>
    </Figure>
  );
}

export default BergenCarousel;

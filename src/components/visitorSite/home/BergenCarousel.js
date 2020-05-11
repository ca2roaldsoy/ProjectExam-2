import React from "react";
import Figure from "react-bootstrap/Figure";

function BergenCarousel({ image, alt, text, imgTitle }) {
  return (
    <Figure>
      <Figure.Image src={image} alt={alt} />
      {imgTitle}
      <Figure.Caption>{text}</Figure.Caption>
    </Figure>
  );
}

export default BergenCarousel;

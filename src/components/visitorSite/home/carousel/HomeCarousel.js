import React from "react";
import Figure from "react-bootstrap/Figure";
import PropTypes from "prop-types";

function HomeCarousel({ image, text, place }) {
  return (
    <Figure>
      <Figure.Image src={image} alt={place} />
      {place}
      <Figure.Caption>{text}</Figure.Caption>
    </Figure>
  );
}

HomeCarousel.propTypes = {
  place: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeCarousel;

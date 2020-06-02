import React from "react";
import Figure from "react-bootstrap/Figure";
import PropTypes from "prop-types";

function HomeCarousel({ image, text, place }) {
  return (
    <Figure className="carousel__figure">
      <Figure.Image src={image} alt={place} className="carousel__figure--img" />
      <h4>{place}</h4>
      <Figure.Caption className="carousel__figure--text">{text}</Figure.Caption>
    </Figure>
  );
}

HomeCarousel.propTypes = {
  place: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default HomeCarousel;

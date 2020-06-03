import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import acceptIcon from "../../../images/accept.png";

function Qualities() {
  return (
    <Col sm={12} className="qualityContainer">
      <Col sm={4} className="quality">
        <Image
          src={acceptIcon}
          className="quality__img img-responsive"
          role="img"
          alt="letter v inside green circle"
        />
        <p className="quality__text">No booking fee</p>
      </Col>

      <Col sm={4} className="quality">
        <Image
          src={acceptIcon}
          className="quality__img img-responsive"
          role="img"
          alt="letter v inside green circle"
        />
        <p className="quality__text">100&amp; Satisfaction</p>
      </Col>

      <Col sm={4} className="quality">
        <Image
          src={acceptIcon}
          className="quality__img img-responsive"
          role="img"
          alt="letter v inside green circle"
        />
        <p className="quality__text">Located in Bergen</p>
      </Col>
    </Col>
  );
}

export default Qualities;

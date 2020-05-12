import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "../../../images/icons/face_v1.jpg";
import TwitterIcon from "../../../images/icons/twitter_v1.jpg";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Row>
      <Col lg={3}>
        <h1>Holidaze</h1>
      </Col>
      <Col lg={3}>
        <Image src={FacebookIcon} alt="facebook" />
        <Image src={TwitterIcon} alt="twitter" />
      </Col>
      <Col lg={3}>
        <p>Copyright &copy;</p>
        <p>2020 Holidaze</p>
      </Col>
    </Row>
  );
}

export default Footer;

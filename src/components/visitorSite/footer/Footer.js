import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "../../../images/icons/face_v1.png";
import TwitterIcon from "../../../images/icons/twitter_v1.png";
import Image from "react-bootstrap/Image";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <Row as="footer" role="contentinfo">
      <Col lg={3} as="section">
        <h1>Holidaze</h1>
      </Col>
      <Col lg={3} as="section">
        <FooterContact />
      </Col>
      <Col lg={3} as="section">
        <Image src={FacebookIcon} alt="facebook" fluid role="link" />
        <Image src={TwitterIcon} alt="twitter" fluid role="link" />
      </Col>
      <Col lg={3} as="section">
        <p>Copyright &copy;</p>
        <p>2020 Holidaze</p>
      </Col>
    </Row>
  );
}

export default Footer;

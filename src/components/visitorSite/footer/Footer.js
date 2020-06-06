import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "../../../images/icons/face_v1.png";
import TwitterIcon from "../../../images/icons/twitter_v1.png";
import Image from "react-bootstrap/Image";
import FooterContact from "./FooterContact";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Row as="footer" role="contentinfo" className="footer">
      <Col sm={12} md={3} lg={3} as="section" className="footer__title">
        <h1 className="footer__title--text">Holidaze</h1>
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__contact">
        <FooterContact />
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__social">
        <Link to="https://www.facebook.com/">
          <Image src={FacebookIcon} alt="facebook" fluid role="link" />
        </Link>
        <Link to="https://twitter.com/explore">
          <Image src={TwitterIcon} alt="twitter" fluid role="link" />
        </Link>
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__copy">
        <p>Copyright &copy;</p>
        <p>2020 Holidaze</p>
      </Col>
    </Row>
  );
}

export default Footer;

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "../../../images/icons/face_v1.png";
import TwitterIcon from "../../../images/icons/twitter_v1.png";
import acceptIcon from "../../../images/accept.png";
import Image from "react-bootstrap/Image";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <Row as="footer" role="contentinfo" className="footer">
      <Col sm={12} className="footer__top">
        <Col sm={4}>
          <Image
            src={acceptIcon}
            className="footer__top--img img-responsive"
            role="img"
            alt="letter v inside green circle"
          />
          <p className="footer__top--text">No booking fee</p>
        </Col>

        <Col sm={4}>
          <Image
            src={acceptIcon}
            className="footer__top--img img-responsive"
            role="img"
            alt="letter v inside green circle"
          />
          <p className="footer__top--text">100&amp; Satisfaction</p>
        </Col>

        <Col sm={4}>
          <Image
            src={acceptIcon}
            className="footer__top--img img-responsive"
            role="img"
            alt="letter v inside green circle"
          />
          <p className="footer__top--text">Located in Bergen</p>
        </Col>
      </Col>

      <Col sm={12} md={3} lg={3} as="section" className="footer__title">
        <h1 className="footer__title--text">Holidaze</h1>
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__contact">
        <FooterContact />
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__social">
        <Image src={FacebookIcon} alt="facebook" fluid role="link" />
        <Image src={TwitterIcon} alt="twitter" fluid role="link" />
      </Col>
      <Col sm={12} md={3} lg={3} as="section" className="footer__copy">
        <p>Copyright &copy;</p>
        <p>2020 Holidaze</p>
      </Col>
    </Row>
  );
}

export default Footer;

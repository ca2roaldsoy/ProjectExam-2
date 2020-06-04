import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AdminImg from "../../../images/bergen/admin_page.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Admin() {
  return (
    <Container className="adminContainer">
      <Row className="admin">
        <Col lg={6} className="admin__section">
          <h1 className="admin__section--title">Holidaze</h1>

          <Link to="/enquiries" className="admin__section--link">
            <Button role="button">Enquiries</Button>
          </Link>
          <Link to="./messages" className="admin__section--link">
            <Button role="button">Messages</Button>
          </Link>
          <Link to="./establishments" className="admin__section--link">
            <Button role="button">Establishments</Button>
          </Link>
        </Col>

        <Col lg={6} className="admin__img">
          <Image src={AdminImg} alt="aurora borealis" fluid role="img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;

import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AdminImg from "../../../images/bergen/admin_page.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Admin() {
  return (
    <Row>
      <Col lg={6}>
        <h1>Holidaze</h1>

        <Link to="/enquiries">
          <Button role="button">Enquiries</Button>
        </Link>
        <Link to="./messages">
          <Button role="button">Messages</Button>
        </Link>
        <Link to="./newEstablishment">
          <Button role="button">Create New Establishment</Button>
        </Link>
      </Col>

      <Col lg={6}>
        <Image src={AdminImg} alt="aurora borealis" fluid role="img" />
      </Col>
    </Row>
  );
}

export default Admin;

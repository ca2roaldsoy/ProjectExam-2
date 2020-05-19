import React from "react";
import { Redirect } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AdminImg from "../../../images/bergen/admin_page.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Admin() {
  const getUser = localStorage.getItem("user");

  if (getUser === null || getUser === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <Row>
      <Col lg={6}>
        <h1>Holidaze</h1>

        <Link to="/enquiries">
          <Button>Enquiries</Button>
        </Link>
        <Link to="./messages">
          <Button>Messages</Button>
        </Link>
        <Link to="./newEstablishment">
          <Button>Create New Establishment</Button>
        </Link>
      </Col>

      <Col lg={6}>
        <Image src={AdminImg} alt="aurora borealis" fluid />
      </Col>
    </Row>
  );
}

export default Admin;

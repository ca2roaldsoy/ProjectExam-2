import React from "react";
import Card from "react-bootstrap/Card";
import ErrorImg from "../../images/error_img.png";
import Container from "react-bootstrap/Container";

function ErrorHandler() {
  return (
    <Container>
      <Card>
        <Card.Img
          src={ErrorImg}
          alt="cartoon drawing, figure stuck in a messy cable"
          role="image"
        />
        <Card.ImgOverlay>
          <Card.Title>Oooopppppsss!!</Card.Title>
          <Card.Text>Looks like something went wrong</Card.Text>
          <Card.Text>Please try refresh the page</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default ErrorHandler;

import React from "react";
import Card from "react-bootstrap/Card";
import ErrorImg from "../../images/error_img.png";
import Container from "react-bootstrap/Container";

function ErrorHandler() {
  return (
    <Container>
      <Card className="pageError">
        <Card.Img
          src={ErrorImg}
          alt="cartoon drawing, figure stuck in a messy cable"
          role="image"
        />
        <Card.ImgOverlay className="pageError__Containerr">
          <Card.Title className="pageError__Container--title">
            Oooopppppsss!!
          </Card.Title>
          <Card.Text className="pageError__Container--text">
            Looks like something went wrong
          </Card.Text>
          <Card.Text className="pageError__Container--text">
            Please try refresh the page
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default ErrorHandler;

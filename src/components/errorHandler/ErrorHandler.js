import React from "react";
import Card from "react-bootstrap/Card";
import ErrorImg from "../../images/error_img.png";
import Container from "react-bootstrap/Container";

// display if response from fetch returns error
function ErrorHandler() {
  return (
    <Container>
      <Card className="pageError">
        <Card.Img
          src={ErrorImg}
          alt="cartoon drawing, figure stuck in a messy cable"
          role="image"
        />
        <Card.Title as="h2" className="pageError__container--title">
          Oooopppppsss!!
        </Card.Title>
        <Card.Text className="pageError__container--text">
          Looks like something went wrong
        </Card.Text>
        <Card.Text className="pageError__container--text">
          <b>Please try refresh the page</b>
        </Card.Text>
      </Card>
    </Container>
  );
}

export default ErrorHandler;

import React from "react";
import Card from "react-bootstrap/Card";
import StopSign from "../../images/stop.png";
import Container from "react-bootstrap/Container";

// if user has no permission to site, display message
function Permission() {
  return (
    <Container>
      <Card className="pageError">
        <Card.Img
          src={StopSign}
          alt="man denying access, with forbidden sign on him"
          role="image"
          className="pageError__img"
        />
        <Card.ImgOverlay className="pageError__container">
          <Card.Title as="h2">
            <b>Access Denied</b>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Title className="pageError__container--title">
          Sorry, You don't have permission to view this page.
        </Card.Title>
        <Card.Text className="pageError__container--text">
          <b>Please log in to gain access to this page</b>
        </Card.Text>
      </Card>
    </Container>
  );
}

export default Permission;

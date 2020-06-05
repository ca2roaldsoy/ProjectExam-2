import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StopSign from "../../images/stop.png";
import Container from "react-bootstrap/Container";

// if user has no permission to site,
// display message and redirect user to home page
function Permission() {
  const history = useHistory();

  /*setTimeout(() => {
    history.push("/");
  }, 5000);*/

  return (
    <Container>
      <Card className="pageError">
        <Card.Img src={StopSign} alt="man denying access" role="image" />
        <Card.ImgOverlay className="pageError__Container">
          <Card.Title className="pageError__Container--title">
            Sorry, You dont have permission to view this page
          </Card.Title>
          <Card.Text className="pageError__Container--text">
            Please log in to gain access to this page
          </Card.Text>
          <Card.Text className="pageError__Container--text">
            You will now be redirectd to home page
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default Permission;

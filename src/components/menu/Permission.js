import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StopSign from "../../images/stop.png";

// if user has no permission to site,
// display message and redirect user to home page
function Permission() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 5000);

  return (
    <Card>
      <Card.Img src={StopSign} alt="man denying access" role="image" />
      <Card.ImgOverlay>
        <Card.Title>
          Sorry, You dont have permission to view this page
        </Card.Title>
        <Card.Text>Please log in to gain access to this page</Card.Text>
        <Card.Text>You will now be redirectd to home page</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Permission;

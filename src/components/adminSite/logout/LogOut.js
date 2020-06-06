import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AdminContext } from "../../context/AdminContext";
import { useHistory } from "react-router-dom";

function LogOut() {
  const { logout } = useContext(AdminContext);
  const history = useHistory();

  // log out user, and redirect home page
  function logOutUser() {
    logout();
    history.push("/");
  }

  return (
    <Button onClick={logOutUser} role="button" className="logOut__btn">
      Log Out
    </Button>
  );
}

export default LogOut;

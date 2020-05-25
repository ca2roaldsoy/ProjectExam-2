import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AdminContext } from "../../context/AdminContext";
import { useHistory } from "react-router-dom";

function LogOut() {
  const { logout } = useContext(AdminContext);
  const history = useHistory();

  function doLogOut() {
    logout();
    history.push("/");
  }

  return (
    <Button onClick={doLogOut} role="button">
      Log Out
    </Button>
  );
}

export default LogOut;

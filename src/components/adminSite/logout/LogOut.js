import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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

  return <Button onClick={doLogOut}>Log Out</Button>;
}

export default LogOut;
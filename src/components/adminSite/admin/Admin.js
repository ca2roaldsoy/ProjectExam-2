import React from "react";
import { Redirect } from "react-router-dom";

function Admin() {
  const getUser = localStorage.getItem("username");

  if (getUser === null || getUser === undefined) {
    return <Redirect to="/" />;
  }

  return <h1>Holidaze</h1>;
}

export default Admin;

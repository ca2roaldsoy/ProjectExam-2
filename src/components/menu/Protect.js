import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Protect = ({ component: Component, ...rest }) => {
  const { user } = useContext(AdminContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Redirect to="/menu" />
      }
    />
  );
};

export default Protect;

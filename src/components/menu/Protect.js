import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import Permission from "./Permission";

const Protect = ({ component: Component, ...rest }) => {
  const { user } = useContext(AdminContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Permission />
      }
    />
  );
};

export default Protect;

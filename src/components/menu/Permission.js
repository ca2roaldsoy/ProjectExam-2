import React from "react";
import { useHistory } from "react-router-dom";

function Permission() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 2000);

  return <div>You dont have permission</div>;
}

export default Permission;

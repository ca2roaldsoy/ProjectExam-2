import React, { useState } from "react";
import PropTypes from "prop-types";

function ViewDetail({ name, id, email }) {
  const [delEst, setDelEst] = useState(false);

  return (
      <tr style={!delEst ? { display: "table-row" } : { display: "none" }}>
        <td>{id}</td>
        <td>{email}</td>
        <td>{name}</td>
      </tr>
  );
}

ViewDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ViewDetail;

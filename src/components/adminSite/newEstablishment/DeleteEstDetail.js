import React, { useState } from "react";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../../../constants/api";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function DeleteEstDetail({ name, id, created }) {
  const [deleteEst, setDeleteEst] = useState(true);

  const history = useHistory();

  function deleteEstablishment() {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options).then(setDeleteEst(false));
    history.push("./delete-establishment/");
  }

  return (
    <tr style={deleteEst ? { display: "table-row" } : { display: "none" }}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{created.slice(0, 10)}</td>
      <td>
        <Button onClick={deleteEstablishment}>Delete establishment</Button>
      </td>
    </tr>
  );
}

DeleteEstDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DeleteEstDetail;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../../../constants/api";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function DeleteEstDetail({ name, id, created }) {
  const [modal, setModal] = useState(false);
  const [delEst, setDelEst] = useState(false);

  const history = useHistory();

  const closeModal = () => setModal(true);
  const openModal = () => setModal(true);

  function deleteEstablishment() {
    const url = BASE_URL + "establishments/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options)
      .then(setModal(false))
      .then(setDelEst(true))
      .catch((err) => console.log(err));
    history.push("./delete-establishment/");
  }

  return (
    <>
      <tr style={!delEst ? { display: "table-row" } : { display: "none" }}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{created.slice(0, 10)}</td>
        <td>
          <Button onClick={openModal}>Delete establishment</Button>
        </td>
      </tr>

      <Modal size="lg" show={modal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Delete Establishment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this establishment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteEstablishment}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => setModal(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

DeleteEstDetail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DeleteEstDetail;

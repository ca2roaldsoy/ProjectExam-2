import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import DeleteEstDetail from "./DeleteEstDetail";
import Loading from "../../spinner/Loading";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function DeleteEstablishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "establishments";
  const options = { headers };

  // fetch establishments
  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        // check if response returns ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((data) => {
        console.log(data);
        setEstablishment(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorHandle(true);
      })
      .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  function deleteEstablishmentDetail() {
    return establishment.map((hotels) => {
      const { id, name, createdAt } = hotels;

      return (
        <DeleteEstDetail name={name} key={id} id={id} created={createdAt} />
      );
    });
  }

  return (
    <Container>
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <article className="manageEstablishments">
          <div className="manageEstablishments__top">
            <h2 className="manageEstablishments__top--title">Establishments</h2>
            <Link to="../create-establishments">
              <Button className="manageEstablishments__top--btn">
                + Create New Establishment
              </Button>
            </Link>
          </div>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{deleteEstablishmentDetail()}</tbody>
          </Table>
        </article>
      )}
    </Container>
  );
}
export default DeleteEstablishment;

import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import DeleteEstDetail from "./DeleteEstDetail";
import Loading from "../../spinner/Loading";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import ErrorHandler from "../../errorHandler/ErrorHandler";

function DeleteEstablishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoading(false);
          setErrorHandle(true);
        }
      })
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <h2>Delete Establishment</h2>
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
        </>
      )}
    </Container>
  );
}
export default DeleteEstablishment;

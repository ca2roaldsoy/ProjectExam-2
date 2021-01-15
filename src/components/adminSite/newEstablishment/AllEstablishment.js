import React, { useState, useEffect } from "react";
import DeleteEstDetail from "./ViewDetail";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AllEstablishment() {

  // get storage and parse it
  const [establishment, setEstablishment] = useState([]);

  
  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("acommodation"));
    setEstablishment(getStorage);
  }, []);


  function viewAllEstablishment() {
    // if no establishments, display message...
    if (localStorage.getItem("acommodation") === null) {
      return (
        <tr>
          <td>There are no acommodations</td>
        </tr>
      );
    } 
    // ...else
    return establishment.map((acc) => {
      const { name, id, email } = acc;
      return (
        <DeleteEstDetail name={name} key={id} id={id} email={email} />
      );
    });
  }

  return (
    <Container>
        <article className="manageEstablishments">
          <div className="manageEstablishments__top">
            <h2 className="manageEstablishments__top--title">Establishments</h2>
            <Link to="../create-establishments">
              <Button className="manageEstablishments__top--btn">
                + Create New Establishment
              </Button>
            </Link>
          </div>
          <Table striped bordered hover responsive variant="dark" role="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{viewAllEstablishment()}</tbody>
          </Table>
        </article>
    </Container>
  );
}
export default AllEstablishment;

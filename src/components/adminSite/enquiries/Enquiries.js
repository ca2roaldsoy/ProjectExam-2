import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import EnquiryDetails from "./EnquiriesDetails";
import Loading from "../../spinner/Loading";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ErrorHandler from "../../errorHandler/ErrorHandler";

function Enquiries() {
  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "enquirie";
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
        setEnquiry(data);
        setLoading(false);
        console.log(data);
      })
      .then()
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // use spinner
  if (loading) {
    return <Loading />;
  }

  // if no enquiries, display message...
  function noEnquiries() {
    if (enquiry.length === 0) {
      return (
        <tr>
          <td>There is no enquiries yet</td>
        </tr>
      );
    }
    // ...else
    return enquiry.map((enq, i) => {
      const {
        name,
        email,
        id,
        checkIn,
        checkOut,
        createdAt,
        establishmentId,
      } = enq;
      return (
        <EnquiryDetails
          name={name}
          email={email}
          id={id}
          key={i}
          checkIn={checkIn}
          checkOut={checkOut}
          created={createdAt}
          establishmentName={establishmentId}
        />
      );
    });
  }

  return (
    <Container className="enquiries">
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <h2>Enquiries</h2>
          <Button
            onClick={() => (window.location.href = "./enquiries")}
            className="enquiries__update"
          >
            Remove resolved enquiries
          </Button>
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="enquiries__table"
          >
            <thead>
              <tr>
                <th>Establishment</th>
                <th>Name</th>
                <th>Email</th>
                <th>Check in</th>
                <th>Check Out</th>
                <th>Created</th>
                <th>Resolve</th>
              </tr>
            </thead>
            <tbody>{noEnquiries()}</tbody>
          </Table>
        </>
      )}
    </Container>
  );
}

export default Enquiries;

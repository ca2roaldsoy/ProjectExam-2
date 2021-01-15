import React, { useState, useEffect }  from "react";
import EnquiryDetails from "./EnquiriesDetails";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function Enquiry() {

  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("enquiry"));
    setEnquiry(getStorage);
  }, []);

  // if no enquiries, display message...
  function noEnquiries() {

    if (localStorage.getItem("enquiry") === null) {
      return (
        <tr>
          <td>There is no enquiries yet</td>
        </tr>
      );
    } 
    // ...else
    return enquiry.map((getS, i) => {
      const {
        establishment,
        clientName,
        email,
        checkin,
        checkout
      } = getS;

      return (
        <EnquiryDetails
          name={clientName}
          email={email}
          key={i}
          checkIn={checkin}
          checkOut={checkout}
          establishmentName={establishment}
        />
      );
    });
  }

  return (
    <Container className="enquiries" as="article" role="article">
          <h2>Enquiries</h2>
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="enquiries__table"
            role="table"
          >
            <thead>
              <tr>
                <th>Establishment</th>
                <th>Name</th>
                <th>Email</th>
                <th>Check in</th>
                <th>Check Out</th>
                <th>Resolve</th>
              </tr>
            </thead>
            <tbody>{noEnquiries()}</tbody>
          </Table>
    </Container>
  );
}

export default Enquiry;

import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import EnquiryDetails from "./EnquiriesDetails";
import Loading from "../../spinner/Loading";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Enquiries() {
  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "enquiries";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setEnquiry(data);
        setLoading(false);
        console.log(data);
      })
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
      return <p>There is no enquiries yet</p>;
    }
    // ...else
    return enquiry.map((enq, i) => {
      const { name, email, id, checkIn, checkOut, createdAt } = enq;
      return (
        <EnquiryDetails
          name={name}
          email={email}
          id={id}
          key={i}
          checkIn={checkIn}
          checkOut={checkOut}
          created={createdAt}
        />
      );
    });
  }

  return (
    <>
      <h1>Enquiries</h1>
      <Button onClick={() => (window.location.href = "./enquiries")}>
        Remove resolved enquiries
      </Button>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Check in</th>
            <th>Check Out</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>{noEnquiries()}</tbody>
      </Table>
    </>
  );
}

export default Enquiries;

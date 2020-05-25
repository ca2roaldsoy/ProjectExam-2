import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import EnquiryDetails from "./EnquiriesDetails";
import Loading from "../../spinner/Loading";
import CardDeck from "react-bootstrap/CardDeck";

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

  function noEnquiries() {
    if (enquiry.length === 0) {
      return <p>There is no enquiries yet</p>;
    }
    return enquiry.map((enq, i) => {
      const {
        name,
        email,
        establishmentId,
        checkIn,
        checkOut,
        createdAt,
      } = enq;
      return (
        <EnquiryDetails
          name={name}
          email={email}
          id={establishmentId}
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
      <CardDeck as="main" role="main">
        {noEnquiries()}
      </CardDeck>
    </>
  );
}

export default Enquiries;

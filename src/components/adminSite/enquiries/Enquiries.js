import React, { useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import EnquiryDetails from "./EnquiriesDetails";

function Enquiries() {
  const url = BASE_URL + "enquiries";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Enquiries</h1>
      <EnquiryDetails />
    </>
  );
}

export default Enquiries;

import React, { useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";

function CreateEnquiry(name, email, establishmentId, checkIn, checkOut) {
  const url = BASE_URL + "enquiries";
  const data = { name, email, establishmentId, checkIn, checkOut };

  const options = { FETCH_OPTIONS, method: "POST", body: JSON.stringify(data) };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json)
      .then((enquiry) => console.log(enquiry))
      .catch((err) => console.log(err));
  }, [url, options]);

  return <div></div>;
}

export default CreateEnquiry;

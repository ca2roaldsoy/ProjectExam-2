import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import { useParams } from "react-router-dom";

function ManageEnquiries() {
  const [enquiry, setEnquiry] = useState([]);

  const { id } = useParams();
  const url = BASE_URL + "enquiries/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEnquiry(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{enquiry.name}</div>;
}

export default ManageEnquiries;

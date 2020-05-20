import React, { useEffect } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";

function ViewEnquiries() {
  const url = BASE_URL + "enquiries";

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((enquiry) => console.log(enquiry))
      .catch((err) => console.log(err));
  }, [url]);

  return <div>hello</div>;
}

export default ViewEnquiries;

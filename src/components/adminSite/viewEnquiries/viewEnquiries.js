import React, { useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";

function ViewEnquiries() {
  const url = BASE_URL + "enquiries";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [url, options]);

  return <div>hello</div>;
}

export default ViewEnquiries;

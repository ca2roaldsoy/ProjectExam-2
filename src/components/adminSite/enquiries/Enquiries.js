import React, { useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";

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

  return <div>hello</div>;
}

export default Enquiries;

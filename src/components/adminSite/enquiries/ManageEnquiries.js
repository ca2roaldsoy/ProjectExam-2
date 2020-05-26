import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Button from "react-bootstrap/Button";

function ManageEnquiries({ id }) {
  const history = useHistory();
  //const { id } = useParams();
  const url = BASE_URL + "enquiries/" + id;
  const options = { headers };

  /*useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);*/

  async function deleteEnquiry() {
    const url = BASE_URL + "enquiries/" + id;
    const options = { headers, method: "DELETE" };

    await fetch(url, options);
    history.push("../enquiries");
  }

  return deleteEnquiry;
}

export default ManageEnquiries;

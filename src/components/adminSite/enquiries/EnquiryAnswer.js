import React from "react";
import Image from "react-bootstrap/Image";
import Accept from "../../../images/accept.png";
import Reject from "../../../images/reject.png";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../../../constants/api";

function EnquiryAnswer({ accepted, rejected, id }) {
  function deleteEstablishment() {
    const url = BASE_URL + "enquiries/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options);
  }

  // if enquiry is accepted
  if (accepted) {
    return (
      <section className="enquiries__resolve">
        {deleteEstablishment()}
        <p className="enquiries__resolve--text">Accepted</p>
        <Image
          src={Accept}
          alt="accept"
          fluid
          className="img-responsive enquiries__resolve--img"
          role="img"
        />
      </section>
    );
  }

  // if enquiry is rejected
  if (rejected) {
    return (
      <section className="enquiries__resolve">
        {deleteEstablishment()}
        <p className="enquiries__resolve--text">Rejected</p>
        <Image
          src={Reject}
          alt="reject"
          fluid
          className="img-responsive enquiries__resolve--img"
          role="img"
        />
      </section>
    );
  }
}

EnquiryAnswer.propTypes = {
  accepted: PropTypes.bool.isRequired,
  rejected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default EnquiryAnswer;

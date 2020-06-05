import React from "react";
import Image from "react-bootstrap/Image";
import AcceptImg from "../../../images/accept.png";
import RejectImg from "../../../images/reject.png";
import PropTypes from "prop-types";
import { BASE_URL, headers } from "../../../constants/api";

function EnquiryAnswer({ accept, reject, id }) {
  function deleteEstablishment() {
    const url = BASE_URL + "enquiries/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options);
  }

  // if enquiry is accepted
  if (accept) {
    return (
      <section className="enquiries__resolve">
        {deleteEstablishment()}
        <p className="enquiries__resolve--text">Accepted</p>
        <Image
          src={AcceptImg}
          alt="reject"
          fluid
          className="img-responsive enquiries__resolve--img"
          role="img"
        />
      </section>
    );
  }

  if (reject) {
    return (
      <section className="enquiries__resolve">
        {deleteEstablishment()}
        <p className="enquiries__resolve--text">Rejected</p>
        <Image
          src={RejectImg}
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
  accepted: PropTypes.bool,
  rejected: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default EnquiryAnswer;

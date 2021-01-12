import React from "react";
import Image from "react-bootstrap/Image";
import AcceptImg from "../../../images/accept_white.png";
import RejectImg from "../../../images/reject_white.png";
import PropTypes from "prop-types";

function EnquiryAnswer({accept, reject}) {

  // if enquiry is accepted
  if (accept) {
    return (
      <section className="enquiries__resolve">
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

  // if enquiry is rejected
  if (reject) {
    return (
      <section className="enquiries__resolve">
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

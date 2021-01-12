import React from "react";
import PropTypes from "prop-types";
import ViewMessage from "./ViewMessage";

function MessagesLayout({ name, email, idx }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <ViewMessage idx={idx} key={idx} />
      </td>
    </tr>
  );
}

MessagesLayout.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default MessagesLayout;

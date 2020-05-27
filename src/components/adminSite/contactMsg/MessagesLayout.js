import React from "react";
import PropTypes from "prop-types";
import ViewMessage from "./ViewMessage";

function MessagesLayout({ name, email, id }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <ViewMessage id={id} />
      </td>
    </tr>
  );
}

MessagesLayout.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MessagesLayout;

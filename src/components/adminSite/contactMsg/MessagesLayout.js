import React from "react";
import ViewMessage from "./ViewMessage";

function MessagesLayout({ name, email, id }) {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <ViewMessage id={id} />
        </td>
      </tr>
    </tbody>
  );
}

export default MessagesLayout;

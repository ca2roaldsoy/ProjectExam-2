import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <>
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="spinner"
      />
      <span className="sr-only">Loading...</span> {/* for screen readers */}
    </>
  );
}
export default Loading;

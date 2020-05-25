import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

// search
export default function Search({ handleSearch }) {
  return (
    <InputGroup className="search" role="searchbox">
      <FormControl
        placeholder="Search by name..."
        onChange={(event) => handleSearch(event)}
        role="search"
      />
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

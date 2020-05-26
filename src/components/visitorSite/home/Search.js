import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SearchIcon from "../../../images/icons/Search_v1.png";
import Image from "react-bootstrap/Image";

// search
export default function Search({ handleSearch }) {
  return (
    <InputGroup className="search" role="searchbox">
      <FormControl
        placeholder="Search by name..."
        onChange={(event) => handleSearch(event)}
        role="search"
      />
      <InputGroup.Append>
        <InputGroup.Text>
          <Image src={SearchIcon} alt="search icon" fluid />
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

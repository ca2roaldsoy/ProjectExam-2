import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from "react-router-dom";

function Breadcrumbs({ crumb, estname }) {
  const { name, id } = useParams();

  switch (crumb) {
    case 1:
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
      );
    case 2:
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href={"/establishment/" + id}>
            {name}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Make Enquiry</Breadcrumb.Item>
        </Breadcrumb>
      );
    case 3:
      return (
        <>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>All Establishment</Breadcrumb.Item>
          </Breadcrumb>
        </>
      );
    case 4:
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/establishment">
            All Establishment
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{estname}</Breadcrumb.Item>
        </Breadcrumb>
      );
    default:
      return null;
  }
}

export default Breadcrumbs;

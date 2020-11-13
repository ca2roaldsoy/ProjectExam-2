import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import AllEstablishments from "./AllEstablishments";
import Loading from "../../spinner/Loading";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import ScrollEvent from "./ScrollEvent";
import {acommodations} from "../../../constants/establishments";

function Establishment() {
  return (
    <>
          <BreadCrumbs crumb={3} />
          <Container as="main" role="main">
            <h2 className="mb-5">Establishments</h2>
            {acommodations.map((hotels) => {
              
              const {
                id,
                image,
                name,
                maxGuests,
                selfCatering,
                price,
                lat,
                lng,
              } = hotels;

              return (
                <AllEstablishments
                  image={image}
                  name={name}
                  maxGuests={maxGuests}
                  selfCatering={selfCatering}
                  price={price}
                  key={id}
                  id={id}
                  lat={lat}
                  lng={lng}
                />
              );
            })}
          </Container>
          <ScrollEvent />
          <Footer />
        </>
  )
}
export default Establishment;

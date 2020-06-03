import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import AllEstablishments from "./AllEstablishments";
import Loading from "../../spinner/Loading";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        {establishment.map((hotels) => {
          const { id, image, name, maxGuests, selfCatering, price } = hotels;

          return (
            <AllEstablishments
              image={image}
              name={name}
              maxGuests={maxGuests}
              selfCatering={selfCatering}
              price={price}
              key={id}
              id={id}
            />
          );
        })}
      </Container>
      <Footer />
    </>
  );
}
export default Establishment;

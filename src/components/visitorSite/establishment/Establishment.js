import React, { useEffect, useState } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../../constants/api";
import AllEstablishments from "./AllEstablishments";
import Loading from "../../spinner/Loading";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "establishments";

  useEffect(() => {
    fetch(url, FETCH_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEstablishment(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  return establishment.map((hotels) => {
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
  });
}
export default Establishment;

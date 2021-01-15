import React, {useState, useEffect} from "react";
import AllEstablishments from "./AllEstablishments";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import ScrollEvent from "./ScrollEvent";

function Establishment() {

  const [establishment, setEstablishment] = useState([]);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem("acommodation"));
    setEstablishment(getStorage);
  }, []);

  return (
    <>
    <BreadCrumbs crumb={3} />
    <Container as="main" role="main">
      <h2 className="mb-5">Establishments</h2>

    {establishment.map((acc) => {
      const { name, id, image, maxGuests, selfCatering, price, lat, lng } = acc;
   
      if (localStorage.getItem("acommodation") === null) {
      return (
        <tr>
          <td>There are no acommodations</td>
        </tr>
      );
    } 
    // ...else

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

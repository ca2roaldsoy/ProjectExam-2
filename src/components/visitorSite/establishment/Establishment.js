import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import AllEstablishments from "./AllEstablishments";
import Loading from "../../spinner/Loading";
import Container from "react-bootstrap/Container";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import ErrorHandler from "../../errorHandler/ErrorHandler";
import ScrollEvent from "./ScrollEvent";

function Establishment() {
  const [establishment, setEstablishment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);

  const url = BASE_URL + "get-establishments.php";
  const options = { headers };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // check if response returns ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((data) => {
        //console.log(data);
        setEstablishment(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorHandle(true);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* display error message if response returns error */}
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <BreadCrumbs crumb={3} />
          <Container as="main" role="main">
            <h2 className="mb-5">Establishments</h2>
            {establishment.map((hotels) => {
              
              const {
                id,
                imageUrl,
                establishmentName,
                maxGuests,
                selfCatering,
                price,
                googleLat,
                googleLong,
              } = hotels;

              return (
                <AllEstablishments
                  image={imageUrl}
                  name={establishmentName}
                  maxGuests={maxGuests}
                  selfCatering={selfCatering}
                  price={price}
                  key={id}
                  id={id}
                  lat={googleLat}
                  lng={googleLong}
                />
              );
            })}
          </Container>
          <ScrollEvent />
          <Footer />
        </>
      )}
    </>
  );
}
export default Establishment;

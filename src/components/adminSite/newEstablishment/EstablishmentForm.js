import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Validated from "../../formValidation/Validated";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorHandler from "../../errorHandler/ErrorHandler";

// react bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// validate input fields
const schema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
  price: yup.number().typeError("Please enter a valid amount").required(),
  maxGuests: yup.number().typeError("Please enter a valid number").required(),
  description: yup
    .string()
    .required("Please write a description")
    .min(3, "description must contain of least 3 characters"),
});

function EstablishmentForm() {
  const [validated, setValidated] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data, event) {
    console.log("data", data);

    // Post new establishment to visitor site
    const url = BASE_URL + "establishments";

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        // check if response returns ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((json) => console.log(json))
      .catch((err) => {
        console.log(err);
        setErrorHandle(true);
      });

    event.target.reset();
    setValidated(true);
  }

  // scroll back to top after submit
  const backToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const reset = () => setValidated(false);

  return (
    <>
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        /*if form is correct, display message after clicking submit*/
        <>
          <Validated validated={validated} message={3} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row as="form">
              <Col lg={12}>
                <Form.Group as="section">
                  <Form.Label htmlFor="name">Establishment Name</Form.Label>
                  <Form.Control type="text" name="name" ref={register} />
                  {errors.name && <Form.Text>{errors.name.message}</Form.Text>}
                </Form.Group>

                <Form.Group as="section">
                  <Form.Label htmlFor="email">Establishment Email</Form.Label>
                  <Form.Control type="email" name="email" ref={register} />
                  {errors.email && (
                    <Form.Text>{errors.email.message}</Form.Text>
                  )}
                </Form.Group>

                <Form.Group as="section">
                  <Form.Label htmlFor="image" className="form-nonRequired">
                    Establishment Image URL
                  </Form.Label>
                  <Form.Control type="text" name="image" ref={register} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group as="section">
                  <Form.Label htmlFor="price">Establishment Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>NOK</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="number" name="price" ref={register} />
                    <InputGroup.Prepend>
                      <InputGroup.Text>.</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="number"
                      name="decimalPrice"
                      ref={register}
                      placeholder="00"
                    />
                    {errors.price && (
                      <Col md={12} className="p-0">
                        <Form.Text>{errors.price.message}</Form.Text>
                      </Col>
                    )}
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group as="section">
                  <Form.Label htmlFor="guests">MaxGuests</Form.Label>
                  <Form.Control type="number" name="maxGuests" ref={register} />
                  {errors.maxGuests && (
                    <Col md={12} className="p-0">
                      <Form.Text>{errors.maxGuests.message}</Form.Text>
                    </Col>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group as="section">
                  <Form.Label htmlFor="latitude" className="form-nonRequired">
                    Latitude
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="lat"
                    step="any"
                    ref={register}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group as="section">
                  <Form.Label htmlFor="longitude" className="form-nonRequired">
                    Longitude
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="lng"
                    step="any"
                    ref={register}
                  />
                </Form.Group>
              </Col>
              <Col lg={12}>
                <Form.Group as="section">
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    name="description"
                    ref={register}
                  />
                  {errors.description && (
                    <Form.Text>{errors.description.message}</Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group as="section">
                  <Form.Label
                    htmlFor="self catering"
                    className="form-nonRequired"
                  >
                    Self Catering
                  </Form.Label>

                  <Form.Check
                    type="radio"
                    label={"Yes"}
                    name="selfCatering"
                    ref={register}
                    value={"on" ? true : null}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    name="selfCatering"
                    ref={register}
                    value={"off" ? false : null}
                  />
                  {errors.selfCatering && (
                    <Form.Text>{errors.selfCatering.message}</Form.Text>
                  )}
                </Form.Group>
              </Col>

              <Col lg={12}>
                <Form.Group className="form__btn" as="section">
                  <Button
                    type="submit"
                    role="button"
                    onClick={backToTop}
                    className="form__btn--submit"
                  >
                    SUBMIT
                  </Button>
                  <Button
                    type="reset"
                    onClick={reset}
                    role="button"
                    className="form__btn--reset"
                  >
                    Reset
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </>
  );
}

export default EstablishmentForm;

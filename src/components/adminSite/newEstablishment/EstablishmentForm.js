import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import { BASE_URL, headers } from "../../../constants/api";
import { v4 as uuidv4 } from "uuid";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));

    setValidated(true);
  }

  return (
    <>
      <Validated validated={validated} message={3} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={12}>
            <Form.Group>
              <Form.Label>Establishment Name</Form.Label>
              <Form.Control type="text" name="name" ref={register} />
              {errors.name && <Form.Text>{errors.name.message}</Form.Text>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Establishment Email</Form.Label>
              <Form.Control type="email" name="email" ref={register} />
              {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Establishment Image URL</Form.Label>
              <Form.Control type="text" name="image" ref={register} />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Establishment Price</Form.Label>
              <Form.Control type="number" name="price" ref={register} />
              {errors.price && <Form.Text>{errors.price.message}</Form.Text>}
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>MaxGuests</Form.Label>
              <Form.Control type="number" name="maxGuests" ref={register} />
              {errors.maxGuests && (
                <Form.Text>{errors.maxGuests.message}</Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Latitude</Form.Label>
              <Form.Control type="number" name="lat" ref={register} />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Longitude</Form.Label>
              <Form.Control type="number" name="lng" ref={register} />
            </Form.Group>
          </Col>
          <Col lg={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
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
            <Form.Group>
              <Form.Label>Self Catering</Form.Label>

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
            <Button type="submit" role="button">
              SUBMIT
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default EstablishmentForm;

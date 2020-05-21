import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../visitorSite/makeEnquiries/Validated";
import { BASE_URL, headers } from "../../../constants/api";
import { v4 as uuidv4 } from "uuid";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// validate input fields
const schema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
  imageUrl: yup.string(),
  price: yup.number().typeError("Please enter a valid amount").required(),
  maxGuests: yup.number().typeError("Please enter a valid number").required(),
  latitude: yup.number(),
  longitude: yup.number(),
  description: yup
    .string()
    .required("Please write a description")
    .min(3, "description must contain of least 3 characters"),
  selfCatering: yup.bool().required("this field is required"),
});

function NewEstablishment() {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const newEstablishment = {
      name: data.Name,
      lastname: data.lastName,
      email: data.email,
    };

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(newEstablishment),
    };

    //await fetch(url, options);
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));

    setValidated(true);
  }

  return (
    <>
      <Validated validated={validated} />
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
              <Form.Control type="text" name="imageUrl" ref={register} />
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
              <Form.Control type="text" name="latitude" ref={register} />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Longitude</Form.Label>
              <Form.Control type="text" name="longitude" ref={register} />
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
                label="Yes"
                name="selfCatering"
                ref={register}
              />

              <Form.Check
                type="radio"
                label="No"
                name="selfCatering"
                ref={register}
              />
              {errors.selfCatering && (
                <Form.Text>{errors.selfCatering.message}</Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Establishment ID</Form.Label>
              <Form.Control
                type="text"
                readOnly
                name="establishmentId"
                placeholder={uuidv4()}
                ref={register}
              />
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

export default NewEstablishment;

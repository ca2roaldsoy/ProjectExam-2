import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "./Validated";
import DatePicker from "react-datepicker";
import CheckDate from "./CheckDate";

// validate input fields
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
});

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    setValidated(true);
  }

  // reset form
  const reset = () => setValidated(false);

  return (
    <>
      <CheckDate checkIn={checkIn} checkOut={checkOut} />
      <Validated validated={validated} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" ref={register} />
          {errors.firstName && (
            <Form.Text>{errors.firstName.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" ref={register} />
          {errors.lastName && <Form.Text>{errors.lastName.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" ref={register} />
          {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Check In</Form.Label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Check Out</Form.Label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
          />
        </Form.Group>

        <Button type="submit" role="button">
          Send Request
        </Button>
        <Button type="reset" onClick={reset} role="button">
          Reset
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;

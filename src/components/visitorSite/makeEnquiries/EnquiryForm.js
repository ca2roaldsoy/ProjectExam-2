import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import DatePicker from "react-datepicker";
import CheckDate from "./CheckDate";
import { BASE_URL, headers } from "../../../constants/api";

// validate input fields
const schema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
});

function EnquiryForm({ id }) {
  const [validated, setValidated] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "enquiries";

    const enquiryData = {
      name: data.name,
      email: data.email,
      establishmentId: id,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
    };

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(enquiryData),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));

    setValidated(true);
  }

  // reset form
  const reset = () => setValidated(false);

  return (
    <>
      <CheckDate checkIn={checkIn} checkOut={checkOut} />
      <Validated validated={validated} message={1} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" ref={register} />
          {errors.name && <Form.Text>{errors.name.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" ref={register} />
          {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Check In</Form.Label>
          <Form.Control
            type="text"
            name="checkIn"
            ref={register}
            value={checkIn.toISOString().slice(0, 10)}
            readOnly
          />
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            dateFormat="yyyy/MM/dd"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Check Out</Form.Label>
          <Form.Control
            type="text"
            name="checkOut"
            ref={register}
            value={checkOut.toISOString().slice(0, 10)}
            readOnly
          />
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            dateFormat="yyyy/MM/dd"
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

export default EnquiryForm;

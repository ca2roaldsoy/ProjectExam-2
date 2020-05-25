import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import { BASE_URL, headers } from "../../../constants/api";

// validate form
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(2, "Message must contain of least 2 characters"),
});

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    const contactData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const url = BASE_URL + "contacts";
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(contactData),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((j) => console.log(j))
      .catch((err) => console.log(err));

    setValidated(true);
  }

  // reset from fields
  const reset = () => setValidated(false);

  return (
    <>
      <Validated validated={validated} message={2} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control type="text" name="name" ref={register} />
          {errors.name && <Form.Text>{errors.name.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" name="email" ref={register} />
          {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            type="message"
            name="message"
            as="textarea"
            ref={register}
          />
          {errors.message && <Form.Text>{errors.message.message}</Form.Text>}
        </Form.Group>
        <Button type="submit" role="button">
          Send
        </Button>
        <Button type="reset" onClick={reset} role="button">
          Reset
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;

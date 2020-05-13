import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "./Validated";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
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

  function onSubmit(data, event) {
    console.log("data", data);

    event.target.reset();
    setValidated(true);
  }

  const reset = () => setValidated(false);

  return (
    <>
      <Validated validated={validated} />
      <Form onSubmit={handleSubmit(onSubmit)} role="form">
        <Form.Group>
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" name="firstName" ref={register()} />
          {errors.message && <Form.Text>{errors.firstName.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" name="lastName" ref={register()} />
          {errors.message && <Form.Text>{errors.lastName.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" ref={register()} />
          {errors.message && <Form.Text>{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="message"
            name="message"
            as="textarea"
            ref={register()}
          />
          {errors.message && <Form.Text>{errors.message.message}</Form.Text>}
        </Form.Group>
      </Form>

      <Button type="submit" role="button">
        Send
      </Button>
      <Button type="reset" onClick={reset} role="button">
        Reset
      </Button>
    </>
  );
}

export default ContactForm;

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorHandler from "../../errorHandler/ErrorHandler";

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
  const [errorHandle, setErrorHandle] = useState(false);

  const refApp = useRef(null);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data, event) {
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

    // post contact message to admin
    fetch(url, options)
      .then((response) => {
        // check if response returns ok
        if (response.ok) {
          return response.json();
        } else {
          setErrorHandle(true);
        }
      })
      .then((j) => console.log(j))
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

  // reset from fields
  const reset = () => setValidated(false);

  return (
    <>
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <Validated validated={validated} message={2} />
          <Form onSubmit={handleSubmit(onSubmit)} ref={refApp}>
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
                className="form__message"
              />
              {errors.message && (
                <Form.Text>{errors.message.message}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="form__btn">
              <Button
                type="submit"
                role="button"
                className="form__btn--submit"
                onClick={backToTop}
              >
                Send
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
          </Form>
        </>
      )}
    </>
  );
}

export default ContactForm;

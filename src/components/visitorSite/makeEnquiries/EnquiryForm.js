import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import DatePicker from "react-datepicker";
import CheckDate from "./CheckDate";
import { BASE_URL, headers } from "../../../constants/api";
import ErrorHandler from "../../errorHandler/ErrorHandler";

// validate input fields
const schema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
});

function EnquiryForm({ id, name }) {
  const [validated, setValidated] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [errorHandle, setErrorHandle] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data, event) {
    console.log("data", data);

    const url = BASE_URL + "enquiries";

    const enquiryData = {
      name: data.name,
      email: data.email,
      establishmentId: name,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
    };

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(enquiryData),
    };

    // post enquiry to admin
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

    // reset fields after submit
    event.target.reset();

    setValidated(true);
  }

  // scroll back to top after submit
  const backToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  // reset form
  const reset = () => setValidated(false);

  return (
    <>
      {errorHandle ? (
        <ErrorHandler />
      ) : (
        <>
          <CheckDate
            checkIn={checkIn}
            checkOut={checkOut}
            backToTop={backToTop}
          />
          <Validated validated={validated} message={1} />
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
              <Form.Label htmlFor="checkIn">Check In</Form.Label>
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
                className="form__date"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="checkOut">Check Out</Form.Label>
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
                className="form__date"
              />
            </Form.Group>

            <Form.Group className="form__btn">
              <Button
                type="submit"
                role="button"
                className="form__btn--submit"
                onClick={backToTop}
              >
                Send Request
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

export default EnquiryForm;

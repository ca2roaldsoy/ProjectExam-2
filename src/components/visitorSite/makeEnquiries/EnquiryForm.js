import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import DatePicker from "react-datepicker";
import CheckDate from "./CheckDate";
import { Enquiries } from "../../../constants/enquiries";
import PropTypes from "prop-types";

// validate input fields
const schema = yup.object().shape({
  clientName: yup.string().required("First Name is required"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid emai"),
});

function EnquiryForm({ name }) {
  const [validated, setValidated] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [dateErr, setDateErr] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data, event) {
    console.log("data", data);

    if (checkOut < checkIn) {
      setDateErr(true);
      setValidated(false);
      return;
    } else {
      Enquiries.push(data);
      setValidated(true);
      console.log(Enquiries)

      // reset fields after submit
      event.target.reset();
      setCheckIn(new Date());
      setCheckOut(new Date());
    }
  }

  // scroll back to top after submit
  const backToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  // reset form
  const reset = () => {
    setValidated(false);
    setCheckIn(new Date());
    setCheckOut(new Date());
  };

  return (
    <>
      {dateErr ? (
        <CheckDate
          checkIn={checkIn}
          checkOut={checkOut}
          backToTop={backToTop}
        />
      ) : null}
          <Validated validated={validated} message={1} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as="section">
              <Form.Label htmlFor="clientName">Name</Form.Label>
              <Form.Control type="text" name="clientName" ref={register} />
              {errors.clientName && <Form.Text>{errors.clientName.message}</Form.Text>}
            </Form.Group>

            <Form.Group as="section">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" name="email" ref={register} />
              {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
            </Form.Group>

            <Form.Group className="form__date" as="section">
              <Form.Label htmlFor="checkIn">Check In</Form.Label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="yyyy/MM/dd"
                className="form__date--picker"
              />
              <Form.Control
                type="text"
                name="checkIn"
                ref={register}
                value={checkIn.toISOString().slice(0, 10)}
                readOnly
              />
            </Form.Group>

            <Form.Group className="form__date" as="section">
              <Form.Label htmlFor="checkOut">Check Out</Form.Label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="yyyy/MM/dd"
                className="form__date--picker"
              />
              <Form.Control
                type="text"
                name="checkOut"
                ref={register}
                value={checkOut.toISOString().slice(0, 10)}
                readOnly
              />
            </Form.Group>

            <Form.Group className="form__btn" as="section">
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
  );
}

EnquiryForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EnquiryForm;

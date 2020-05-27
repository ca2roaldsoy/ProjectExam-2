import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";
import { BASE_URL, headers } from "../../../constants/api";

// validate input field
const schema = yup.object().shape({
  respondMsg: yup.string().required("Please enter a message"),
});

function MessageRespondForm({ closeModal, setViewed }) {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    setValidated(true);
  }

  if (validated) {
    setViewed(true);

    return (
      <>
        <Validated validated={validated} message={2} />
        <Button type="button" role="button" onClick={closeModal}>
          Close
        </Button>
      </>
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} role="form">
        <Form.Group>
          <Form.Label>Respond</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            name="respondMsg"
            ref={register()}
          />
          {errors.respondMsg && (
            <Form.Text>{errors.respondMsg.message}</Form.Text>
          )}
        </Form.Group>

        <Button type="submit" role="button">
          Send
        </Button>
      </Form>
    </>
  );
}

export default MessageRespondForm;

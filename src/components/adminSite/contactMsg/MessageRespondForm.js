import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validated from "../../formValidation/Validated";

// validate input field
const schema = yup.object().shape({
  respondMsg: yup.string().required("Please enter a message"),
});

function MessageRespondForm({ closeModal, validated, setValidated }) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    setValidated(true);
  }

  if (validated) {
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

MessageRespondForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default MessageRespondForm;

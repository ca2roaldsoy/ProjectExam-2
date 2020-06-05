import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../constants/api";

// validate input field
const schema = yup.object().shape({
  respondMsg: yup.string().required("Please enter a message"),
});

function MessageRespondForm({ closeModal, setValidated, id }) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "contacts/" + id;
    const options = { headers, method: "DELETE" };

    fetch(url, options)
      .then(closeModal)
      .catch((err) => console.log(err));

    setValidated(true);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        role="form"
        className="messageModal_respond"
      >
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

        <Button type="submit" role="button" className="modal__respond--btn">
          Send
        </Button>
      </Form>
    </>
  );
}

MessageRespondForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setValidated: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default MessageRespondForm;

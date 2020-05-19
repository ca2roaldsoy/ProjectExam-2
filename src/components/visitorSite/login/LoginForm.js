import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ValidateLogin from "./ValidateLogin";
import { Link } from "react-router-dom";
import { AdminContext } from "../../adminSite/context/AdminContext";
import { useHistory } from "react-router-dom";

// validate input field
const schema = yup.object().shape({
  userName: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .min(8, "Please enter password")
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain of one lower case letter, one uppercase letter and one number"
    ),
});

function LoginForm() {
  const [ValidLogin, setValidLogin] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const { registerUser } = useContext(AdminContext);
  const history = useHistory();

  function onSubmit(data, event) {
    console.log("data", data);

    registerUser(data.userName);
    history.push("/admin");

    event.target.reset();
    setValidLogin(true);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} role="form">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="userName" ref={register()} />
          {errors.userName && <Form.Text>{errors.userName.message}</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" name="password" ref={register()} />
          {errors.password && <Form.Text>{errors.password.message}</Form.Text>}
        </Form.Group>

        <Form.Text>
          Forgot Password? <Link to="#">Click here</Link>
        </Form.Text>

        <Button type="submit" role="button">
          Log In
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;

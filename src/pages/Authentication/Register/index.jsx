import React, { useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import AuthService from "../../../api/AuthService";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { handlers } from "../../../untils/handlers";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.register(data.username, data.email, data.password)
      .then((response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      });
  };

  const { onChangeInput } = handlers;

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>Student Registration</h1>
          <form onSubmit={handleRegister}>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={data.username}
                    onChange={onChangeInput("username", data, setData)}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={data.email}
                    onChange={onChangeInput("email", data, setData)}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={data.password}
                    onChange={onChangeInput("password", data, setData)}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <div className="pt-12">
              <Button name="Login" size="full" color="primary" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import AuthService from "../../../api/authService";
import Button from "../../../components/Button";
import { handlers } from "../../../utils/handlers";

export default function Register() {

  const [data, setData] = useState({
    firstName: "", lastName: "", username: "",
    email: "", password: "", avatar: null, birthdate: ""
  });
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.register(data)
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
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

  const { onChangeTextField, onChangeInputFile, onChangeDate } = handlers;

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>Student Registration</h1>
          <form onSubmit={handleRegister}>
            {!successful && (
              <div>
                <div className="form-group">
                  <TextField
                    required
                    type="text"
                    label="Username"
                    variant="standard"
                    name="username"
                    value={data.username}
                    onChange={onChangeTextField("username", setData)}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    required
                    label="Email"
                    type="email"
                    variant="standard"
                    name="email"
                    value={data.email}
                    onChange={onChangeTextField("email", setData)}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    required
                    label="Password"
                    type="password"
                    variant="standard"
                    name="password"
                    value={data.password}
                    onChange={onChangeTextField("password", setData)}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    required
                    type="text"
                    label="First name"
                    variant="standard"
                    name="firstName"
                    value={data.firstName}
                    onChange={onChangeTextField("firstName", setData)}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    required
                    label="Last name"
                    type="text"
                    variant="standard"
                    name="lastName"
                    value={data.lastName}
                    onChange={onChangeTextField("lastName", setData)}
                  />
                </div>

                <div className="form-group">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disablePast
                      format="DD/MM/YYYY"
                      value={data.birthdate}
                      slotProps={{ textField: { variant: "standard", required: true } }}
                      onChange={onChangeDate("birthdate", setData)} />
                  </LocalizationProvider>
                </div>

                <div className="form-group">
                  <label htmlFor="avatar">Add user avatar</label>
                  <input
                    type="file"
                    className="form-control"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={onChangeInputFile("avatar", setData)}
                  />
                </div>
                <div className="form-group pt-12">
                  <Button name="Register" size="full" color="primary" type="submit" />
                </div>
              </div>
            )}
            {message && (
              <div className="form-group">
                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

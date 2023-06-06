import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import AuthService from "../../../api/authService";
import Button from "../../../components/Button";
import { handlers } from "../../../utils/handlers";
import Input from "../../../components/Input";
import SideBar from "../SideBar";
import WrapperForm from "../WrapperForm";
import Header from "../Header";
import FormHeader from "../Login/FormHeader";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Pathname } from "../../../routes";
import { ArrowForwardIosRounded as ArrowForwardIcon } from "@mui/icons-material";
import "./index.css";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "", lastName: "", username: "",
    email: "", password: "", avatar: null, birthdate: null
  });

  const handleRegister = (e) => {
    e.preventDefault();

    AuthService.register(data)
      .then((response) => {
        toast.info(response.message);
        navigate(Pathname.login);
      })
      .catch((error) => {
        console.log(error);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(resMessage);
      });
  };

  const {onChangeInputText, onChangeInputFile, onChangeDate} = handlers;

  return (
    <div className="signin-container" data-testid="sign-in">
      <SideBar/>
      <WrapperForm>
        <Header back={false}/>
        <FormHeader title="Nice to meet you!"
                    description="Please enter your details below in order to Register to the Portfolio."/>
        <div className="sign-in-form-details">
          <form onSubmit={handleRegister}>
            <div>
              <div className="from-fio-container">
                <div className="form-left-side">
                  <Input required type="text" label="First name" name="firstName"
                         value={data.firstName} onChange={onChangeInputText("firstName", setData)}/>
                </div>
                <div className="form-right-side">
                  <Input required type="text" label="Last name" name="lastName"
                         value={data.lastName} onChange={onChangeInputText("lastName", setData)}/>
                </div>
              </div>

              <div className="form-group">
                <Input required type="text" label="Username" name="username"
                       value={data.username} onChange={onChangeInputText("username", setData)}/>
              </div>

              <div className="form-group">
                <Input required type="email" label="Email" variant="standard" name="email"
                       value={data.email} onChange={onChangeInputText("email", setData)}/>
              </div>

              <div className="form-group">
                <Input required type="password" label="Password" variant="standard" name="password"
                       value={data.password} onChange={onChangeInputText("password", setData)}/>
              </div>

              <div className="from-meta-data-container">
                <div className="form-left-side">
                  <label htmlFor="avatar" className="label-bd text-gray-30 font-medium label text-base">
                    Birthdate
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      format="DD/MM/YYYY"
                      value={data.birthdate}
                      onChange={onChangeDate("birthdate", setData)}
                      renderInput={(params) => {
                        return (<TextField{...params} InputLabelProps={{shrink: true}}/>);
                      }}/>
                  </LocalizationProvider>
                </div>
                <div className="form-right-side">
                  <div className="form-group">
                    <label htmlFor="avatar" className="text-gray-30 font-medium label pb-1 text-base">
                      Avatar
                    </label>
                    <TextField type="file" variant="outlined" name="avatar"
                               onChange={onChangeInputFile("avatar", setData)}/>
                  </div>
                </div>
              </div>
              <div className="form-group pt-12">
                <Button name="Register" size="full" color="primary" type="submit"/>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Link className="flex items-center" to={Pathname.login}>
              <p className="text-base text-gray-40">Have account? Go Login</p>
              <ArrowForwardIcon/>
            </Link>
          </div>
        </div>
      </WrapperForm>
    </div>
  );
}

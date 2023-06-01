import {TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React, {useState} from "react";
import AuthService from "../../../api/authService";
import Button from "../../../components/Button";
import {handlers} from "../../../utils/handlers";
import Input from "../../../components/Input";
import SideBar from "../SideBar";
import WrapperForm from "../WrapperForm";
import Header from "../Header";
import FormHeader from "../Login/FormHeader";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {Pathname} from "../../../routes";
import {ArrowForwardIosRounded as ArrowForwardIcon} from "@mui/icons-material";
import "./index.css"

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

  const {onChangeTextField, onChangeInputFile, onChangeDate} = handlers;

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
                  <Input required type="text" label="First name" variant="standard" name="firstName"
                         value={data.firstName} onChange={onChangeTextField("firstName", setData)}/>
                </div>
                <div className="form-right-side">
                  <Input required type="text" label="Last name" variant="standard" name="lastName"
                         value={data.lastName} onChange={onChangeTextField("lastName", setData)}/>
                </div>
              </div>

              <div className="form-group">
                <Input required type="text" label="Username" variant="standard" name="username"
                       value={data.username} onChange={onChangeTextField("username", setData)}/>
              </div>

              <div className="form-group">
                <Input required type="email" label="Email" variant="standard" name="email"
                       value={data.email} onChange={onChangeTextField("email", setData)}/>
              </div>

              <div className="form-group">
                <Input required type="password" label="Password" variant="standard" name="password"
                       value={data.password} onChange={onChangeTextField("password", setData)}/>
              </div>

              <div className="from-meta-data-container">
                <div className="form-left-side">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disablePast
                      format="DD/MM/YYYY"

                      // labelStyle: "text-gray-30 font-medium label pb-1 text-base",
                      // mainStyle: "text-input flex flex-col pt-3",
                      slots={Input}
                      value={data.birthdate}
                      onChange={onChangeDate("birthdate", setData)}/>
                  </LocalizationProvider>
                </div>
                <div className="form-right-side">
                  <div className="form-group">
                    <Input required type="file" label="Avatar" variant="outlined" name="avatar"
                           value={data.username} inputStyle="se" mainStyle="ed"
                           onChange={onChangeInputFile("avatar", setData)}/>


                  </div>
                </div>

              </div>


              <div className="form-group pt-12">
                <Button name="Register" size="full" color="primary" type="submit"/>
              </div>
            </div>
          </form>
          {message && (toast.warning({message}))}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Link className="flex items-center" to={Pathname.forgotPassword}>
              <p className="text-base text-gray-40">Have account? Go Login</p>
              <ArrowForwardIcon/>
            </Link>
          </div>
        </div>
      </WrapperForm>
    </div>

  )
    ;
}

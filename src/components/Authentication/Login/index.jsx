import { ArrowForwardIosRounded as ArrowForwardIcon } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pathname } from "../../../routes";
import { handlers } from "../../../untils/handlers";
import Button from "./../Button";
import Input from ".//src/components/Input";
import Header from "../Header";
import SideBar from "../SideBar";
import WrapperForm from "../WrapperForm";
import FormHeader from "./FormHeader";


export default function SignIn() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  async function handleSignIn(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8008/api/v1/employee/login", {
        email: data.email,
        password: data.password
      }).then((res) => {
        console.log(res.data);
        if (res.data.message === "Email not exits") {
          alert("Email not exits");
        } else if (res.data.message === "Home Success") {
          navigate("/home");
        } else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    } catch (err) {
      alert(err);
    }
  }

  const { onChangeInput } = handlers;

  return (
    <div className="signin-container" data-testid="sign-in">
      <SideBar/>
      <WrapperForm>
        <Header back={false}/>
        <FormHeader
          title="Welcome Back!"
          description="Please enter your details below in order to login to the Portfolio."
        />
        <div className="sign-in-form-details">
          <form onSubmit={handleSignIn}>
            <Input
              id="email"
              label="Your Email"
              type="text"
              placeholder="Please enter your email"
              value={data.email}
              onChange={onChangeInput("email", data, setData)}
              required
            />
            <Input
              id="password-id"
              label="Password"
              type="password"
              placeholder="Please enter your password"
              value={data.password}
              onChange={onChangeInput("password", data, setData)}
              required
            />
            <div className="pt-12">
              <Button name="Login" size="full" color="primary" type="submit"/>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-6">
            <p className="text-base text-gray-40">Forgot Password?</p>
            <Link className="flex items-center" to={Pathname.forgotPassword}>
              <p className="text-base font-medium">Reset it here</p>
              <ArrowForwardIcon/>
            </Link>
          </div>
        </div>
      </WrapperForm>
    </div>
  );
}

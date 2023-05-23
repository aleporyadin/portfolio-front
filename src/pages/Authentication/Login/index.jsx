import { ArrowForwardIosRounded as ArrowForwardIcon } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../api/AuthService";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AuthContext from "../../../context/AuthContext";
import { Pathname } from "../../../routes";
import { handlers } from "../../../untils/handlers";
import Header from "../Header";
import SideBar from "../SideBar";
import WrapperForm from "../WrapperForm";
import FormHeader from "./FormHeader";
import { toast } from "react-toastify";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login() {
  const [data, setData] = useState({ login: "", password: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsAdmin, setIsModerator, setIsUser, setCurrentUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    AuthService.login(data.login, data.password)
      .then((user) => {
        if (user.token) {
          setCurrentUser(user);
          setIsUser(user.roles.includes("ROLE_MODERATOR"));
          setIsModerator(user.roles.includes("ROLE_MODERATOR"));
          setIsAdmin(user.roles.includes("ROLE_ADMIN"));
          navigate("/profile");
          toast.info(`Login Successfully. Welcome!`, {
            autoClose: 2000
          });
        }
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };

  const { onChangeInput } = handlers;

  return (
    <div className="signin-container" data-testid="sign-in">
      <SideBar />
      <WrapperForm>
        <Header back={false} />
        <FormHeader
          title="Welcome Back!"
          description="Please enter your details below in order to login to the Portfolio."
        />
        <div className="sign-in-form-details">
          <form onSubmit={handleLogin}>
            <Input
              id="login"
              label="Your Login"
              type="text"
              placeholder="Please enter your login here"
              name="login"
              value={data.login}
              onChange={onChangeInput("login", data, setData)}
              validations={[required]}
              required
            />
            <Input
              id="password"
              label="Your Password"
              type="password"
              placeholder="Please enter your password here"
              name="password"
              value={data.password}
              onChange={onChangeInput("password", data, setData)}
              validations={[required]}
              required
            />

            <div className="pt-12">
              <Button name="Login" size="full" color="primary" type="submit" />
            </div>
          </form>
          {message && (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Danger
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{message}</p>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-2 mt-6">
            <p className="text-base text-gray-40">Forgot Password?</p>
            <Link className="flex items-center" to={Pathname.forgotPassword}>
              <p className="text-base font-medium">Reset it here</p>
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
      </WrapperForm>
    </div>
  );
}

export default Login;

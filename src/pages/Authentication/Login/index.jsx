import {ArrowForwardIosRounded as ArrowForwardIcon} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../../api/authService";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AuthContext from "../../../context/AuthContext";
import {Pathname} from "../../../routes";
import {handlers} from "../../../utils/handlers";
import {isSignedIn} from "../../../utils/session";
import Header from "../Header";
import SideBar from "../SideBar";
import WrapperForm from "../WrapperForm";
import FormHeader from "./FormHeader";
import {toast} from "react-toastify";

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
  const [data, setData] = useState({login: "", password: ""});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {setIsAdmin, setIsModerator, setIsUser, setCurrentUser, currentUser} = useContext(AuthContext);

  useEffect(() => {
    if (isSignedIn()) { //&& !isRequiredTwoAuth()
      navigate(Pathname.home);
    }
    // } else if (isSignedIn() ) { //&& isRequiredTwoAuth()
    //   history.push(Pathname.two_factor_proceed, {
    //     "authy-id": signInfo.data.attributes["authy-id"],
    //     "user-id": signInfo.data.id
    //   });
    // }
  }, [currentUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    AuthService.login(data.login, data.password).then((user) => {
      if (user.token) {
        setCurrentUser(user);
        setIsUser(user.roles.includes("ROLE_MODERATOR"));
        setIsModerator(user.roles.includes("ROLE_MODERATOR"));
        setIsAdmin(user.roles.includes("ROLE_ADMIN"));
        navigate("/home");
        toast.info(`Login Successfully. Welcome!`, {
          autoClose: 2000
        });
      }
    }).catch((error) => {
      const resMessage = (error.response && error.response.data &&
        error.response.data.message) || error.message || error.toString();
      setLoading(false);
      toast.error({resMessage})
    });
  };

  const {onChangeInputText} = handlers;

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
          <form onSubmit={handleLogin}>
            <Input
              id="login"
              label="Your Username"
              type="text"
              placeholder="Please enter your Username here"
              name="login"
              value={data.login}
              onChange={onChangeInputText("login", setData)}
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
              onChange={onChangeInputText("password", setData)}
              validations={[required]}
              required
            />

            <div className="pt-12">
              <Button name="Login" size="full" color="primary" type="submit"/>
            </div>
          </form>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-6">
            <p className="w-full flex justify-end text-base text-gray-40">Forgot Password?</p>

            <Link className="flex items-center" to={Pathname.forgotPassword}>
              <p className="text-base font-medium">Reset it here</p>
              <ArrowForwardIcon/>
            </Link>
            <p className="w-full flex justify-end text-base text-gray-40">Or. </p>

            <Link className="flex items-center" to={Pathname.register}>
              <p className="text-base font-medium">What to Register?</p>
              <ArrowForwardIcon/>
            </Link>
          </div>
        </div>
      </WrapperForm>
    </div>
  );
}

export default Login;

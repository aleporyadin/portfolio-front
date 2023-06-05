import React, { useContext, useEffect } from "react";
import Switches from "./Switches";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "../utils/session";
import { isEmpty } from "lodash";
import { Pathname } from "./index";
import AuthContext from "../context/AuthContext";
import AuthService from "../api/authService";

export default function RouteSwitch() {

  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const checkUser = async () => {
    if (isSignedIn()) {
      if (!isEmpty(currentUser)) return;
      const user = await AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
      } else {
        console.error(user);
        window.location.reload();
      }
    } else {
      navigate(Pathname.login);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Switches/>
  );
}

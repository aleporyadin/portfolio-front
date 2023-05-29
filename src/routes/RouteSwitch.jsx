import { isEmpty } from "lodash";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../api/authService";
import AuthContext from "../context/AuthContext";
import { isSignedIn } from "../utils/session";
import { Pathname } from "./index";
import Switches from "./Switches";

export default function RouteSwitch() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (isSignedIn()) {
      if (!isEmpty(currentUser)) return;
      const user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
      } else {
        console.error(user);
        window.location.reload();
      }
    } else {
      navigate(Pathname.login);
    }
  }, []);

  return <Switches />;
}

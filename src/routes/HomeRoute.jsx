import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Pathname } from "./index";
import { AuthContext } from "../context/AuthContext";

export default function HomeRoute({ _path, _exact }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    // if (!isSignedIn()) {
    //   history.push(Pathname.signIn);
    // } else if (currentUser["auth-type"] === "app") {
    //   history.push(Pathname.dashboard);
    // } else {
    //   history.push(Pathname.two_factor_proceed);
    // }
    navigate(Pathname.login);
  });
  return <CircularProgress/>;
}

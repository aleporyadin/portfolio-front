import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "../utils/session";

import { Pathname } from "./index";

export default function BaseRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn()) {
      navigate(Pathname.login);
    } else {
      navigate(Pathname.home);
    }
  }, []);

  return <CircularProgress />;
}

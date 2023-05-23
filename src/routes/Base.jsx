import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pathname } from "./index";

export const Base = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(Pathname.login);
  });

  return "";
};

Base.propTypes = {};

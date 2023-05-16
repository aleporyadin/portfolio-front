import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pathname } from "./index";
import HomeRoute from "./HomeRoute";
import SignIn from "../components/Authentication/Login";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ Pathname.home } element={ <HomeRoute/> }/>
        <Route path={ Pathname.login } element={ <SignIn/> }/>
      </Routes>
    </BrowserRouter>
  );
}

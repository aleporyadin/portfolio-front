import React, { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";
import AuthService from "../api/AuthService";
import AuthContext from "../context/AuthContext";
import { Admin } from "../pages/Admin";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { Index } from "../pages/Moderator";
import { Profile } from "../pages/Profile";
import { User } from "../pages/User";
import { isSignedIn } from "../untils/session";
import { Base } from "./Base";
import { Pathname } from "./index";

export default function RouteSwitch() {
  const { currentUser, setCurrentUser, setAbilities } =
    useContext(AuthContext);

  useEffect(() => {
    if (isSignedIn()) {
      if (!isEmpty(currentUser)) return;
      AuthService.getCurrentUser()
        .then((res) => {
          console.log(res);
          // setCurrentUser(resp.currentUser);
          // setAbilities(resp.abilities);
        })
        .catch((error) => {
          console.error(error);
          //clearOnSignOut();
          window.location.reload();
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pathname.login} element={<Login />} exact />
        <Route path={Pathname.register} element={<Register />} exact />
        <Route path={Pathname.profile} element={<Profile />} exact />
        <Route path={Pathname.user} element={<User />} exact />
        <Route path={Pathname.mod} element={<Index />} exact />
        <Route path={Pathname.admin} element={<Admin />} exact />

        <Route path={Pathname.base} element={<Base />} exact />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>

    </BrowserRouter>
  );
}

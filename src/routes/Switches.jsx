import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "../pages/Admin";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { Home } from "../pages/Home";
import { Moderator } from "../pages/Moderator";
import { User } from "../pages/User";
import { Main } from "./Main";
import { Pathname } from "./index";
import { Projects } from "../pages/Projects";

function Switches() {
  return (
    <Routes>
      <Route path={Pathname.login} element={<Login/>}/>
      <Route path={Pathname.register} element={<Register/>}/>

      <Route path="/" element={<Main/>}>
        <Route index path={Pathname.home} element={<Home/>}/>
        <Route path={Pathname.projects} element={<Projects/>}/>

        {/*<Route path={Pathname.profile} element={<Profile />} />*/}
        <Route path={Pathname.user} element={<User/>}/>
        <Route path={Pathname.mod} element={<Moderator/>}/>
        <Route path={Pathname.admin} element={<Admin/>} exact="true"/>
        <Route path="*" element={<Navigate to={Pathname.home} replace/>}/>
        <Route path="/" element={<Navigate to={Pathname.home} replace/>}/>
      </Route>
    </Routes>
  );
}

export default Switches;

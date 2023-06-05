import {Divider, Tooltip} from "@mui/material";
import clsx from "clsx";
import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {useNotificationCenter} from "react-toastify/addons/use-notification-center";
import "./index.scss";
import {Pathname} from "../../routes";
import {ReactComponent as LogoIcon} from "assets/navbar-logo.svg";
import {ReactComponent as OverviewIcon} from "assets/dashboard.svg";
import {ReactComponent as ProductsIcon} from "assets/create_product.svg";
import {ReactComponent as UserIcon} from "assets/profile.svg";
import cn from "classnames";
import Profile from "../Modal/Profile";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="nav-bar" data-testid="nav-bar">
      <LogoIcon className="logo-icon"/>
      <Divider className="horizontal-line"/>
      <div className="nav-bundle flex flex-col items-center">
        <NavLink exact="true" to={Pathname.home}>
          <Tooltip title="Dashboard" placement="right-start" arrow>
            <OverviewIcon className={clsx("overview-icon", "smooth-icon")}/>
          </Tooltip>
        </NavLink>
        <NavLink exact="true" to={Pathname.projects}>
          <Tooltip title="Projects" placement="right-start" arrow>
            <ProductsIcon className={clsx("overview-icon", "smooth-icon")}/>
          </Tooltip>
        </NavLink>
        <div className="nav-item-popup-container">
          <Tooltip title="Profile" placement="right-start" arrow>
            <UserIcon onClick={toggleProfile} className={cn({
              "overview-icon": true,
              "smooth-icon": true,
              "activate-icon": showProfile
            })}/>
          </Tooltip>
        </div>
      </div>
      {showProfile && <Profile isOpen={showProfile} onClose={toggleProfile}/>}
    </div>
  );
}

export default Navbar;

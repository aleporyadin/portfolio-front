import React, {useContext} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AuthService from "../../api/authService";
import AuthContext from "../../context/AuthContext";
import {Pathname} from "../../routes";
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Tooltip} from "@mui/material";
import {Logout as LogoutIcon} from '@mui/icons-material';
import clsx from "clsx";

const Banner = ({name, className, subtitle}) => {
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    AuthService.logout();
    navigate(Pathname.login);
  };

  console.log(currentUser);
  return (
    <div className={classNames("banner", className)} data-testid="banner">
      <div className="main-col-1 flex flex-grow">
        <h2 className="text-black flex items-center text-xl6 border-r pr-12 mr-8 h-14 border-gray-80 pl-6">{name}</h2>
        <p className="text-black">
          <span className=" text-xl2">Welcome! </span>
          <div className="flex items-center ml-5 ">
            <Avatar alt="Remy Sharp" src="user.svg"/>
            <span className="ml-5 text-xl">{currentUser?.username}</span>
          </div>
        </p>
        <div className="banner-list flex gap-10 flex-grow">

        </div>
      </div>

      <div className=" main-col-3 welcome-user pr-6 flex flex-col items-end">

        <div>
          <NavLink exact=" true" to={Pathname.login} onClick={logout}>
            <Tooltip title=" Logout">
              <LogoutIcon className={clsx(" overview-icon", " smooth-icon")}/>
            </Tooltip>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.defaultProps = {
  name: "",
  style: "",
  subtitle: ""
};

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(Array),
  style: PropTypes.string,
  loading: PropTypes.bool
};

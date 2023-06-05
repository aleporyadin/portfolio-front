import React, {useContext, useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AuthService from "../../api/authService";
import AuthContext from "../../context/AuthContext";
import {Pathname} from "../../routes";
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Tooltip} from "@mui/material";
import {Logout as LogoutIcon} from "@mui/icons-material";
import clsx from "clsx";

const Banner = ({name, className, subtitle}) => {
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    AuthService.logout();
    navigate(Pathname.login);
  };
  useEffect(() => {
  }, [currentUser]);

  return (
    <div className={classNames("banner", className)} data-testid="banner">
      <div className="grid grid-rows-2 grid-cols-2 gap-1.5 items-center">
        <div className="flex justify-center h-full items-center row-span-2 border-gray-80 border-r pr-12 mr-8  pl-6">
          <h2 className="text-black flex items-center text-xl6">{name}</h2>
        </div>
        <div className="text-black col-start-2 row-span-2">
          <div className="flex items-center ml-2 ">
            <Avatar alt={currentUser.username} src={currentUser.avatarUrl} sx={{width: '4vw', height: '4vw'}}/>
            <span className="ml-5 text-xl6">{currentUser?.username}</span>
          </div>
        </div>
        <div className="banner-list flex gap-10 flex-grow">

        </div>
      </div>

      <div className="logout-btn border-gray-80 border-l pr-10 pl-6">
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

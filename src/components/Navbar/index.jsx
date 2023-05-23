import MailIcon from "@mui/icons-material/Mail";
import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
import "./index.scss";

function Navbar() {
  const { isAdmin, isModerator, isUser, currentUser } = useContext(AuthContext);
  const { unreadCount } = useNotificationCenter();

  // const toggleNotificationCenter = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="grid grid-rows-1 grid-cols-12 items-center px-4 py-2 bg-primary-10 navbar-container">
      <div className="col-start-2">
        <Link to="/" className="text-white font-bold text-xl4">Logo</Link>
      </div>
      <div className="col-span-4 col-start-8 grid grid-cols-4 justify-items-center items-center gap-3 h-full">
        <Link to="/home" className="text-white mr-4 text-xl4">Home</Link>
        <Link to="/news" className="text-white mr-4 text-xl4">News</Link>
          <div className="flex justify-around w-full items-center text-white text-xl4">
            <img src="avatar.png" alt="" className="w-12 h-12 rounded-full" />
            Profile
          </div>
        <IconButton size="large">
          <Badge badgeContent={unreadCount} color="primary">
            <MailIcon color="action" />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
}

export default Navbar;

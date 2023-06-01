import MailIcon from "@mui/icons-material/Mail";
import { Badge, Divider, IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../../api/authService";
import AuthContext from "../../context/AuthContext";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
import "./index.scss";
import { Pathname } from "../../routes";
import { ReactComponent as LogoIcon } from "assets/navbar-logo.svg";
import { ReactComponent as OverviewIcon } from "assets/dashboard.svg";
import { ReactComponent as ProductsIcon } from "assets/create_product.svg";

function Navbar() {
  const {isAdmin, isModerator, isUser, currentUser} = useContext(AuthContext);
  const {unreadCount} = useNotificationCenter();

  return (
    <div className={"nav-bar"} data-testid="nav-bar">
      <LogoIcon className="logo-icon"/>
      <Divider className="horizontal-line"/>
      <div className="nav-bundle flex justify-between flex-col	">
        <div className="flex flex-col items-center">
          <NavLink exact="true" to={Pathname.home}>
            <Tooltip title="Dashboard">
              <OverviewIcon className={clsx("overview-icon", "smooth-icon")}/>
            </Tooltip>
          </NavLink>
          <NavLink exact to={Pathname.portfolio}>
            <Tooltip title="Create Products">
              <ProductsIcon className={clsx("overview-icon", "smooth-icon")}/>
            </Tooltip>
          </NavLink>
          <NavLink exact to={Pathname.account}>
            <Tooltip title="Create Products">
              <ProductsIcon className={clsx("overview-icon", "smooth-icon")}/>
            </Tooltip>
          </NavLink>
        </div>
      </div>
    </div>
    // <div className="navbar-container">
    //   <div className="navbar-logo col-start-1 justify-self-end">
    //     <Link to="/" className="text-white font-bold text-xl4">Logo</Link>
    //   </div>
    //   <nav className="navbar navbar-links">
    //     <Link to="/home" className="text-white mr-4 text-xl4">Home</Link>
    //     <Link to="/news" className="text-white mr-4 text-xl4">News</Link>
    //     {isModerator && (<Link to={"/mod"} className="text-white mr-4 text-xl4">Moderator Board</Link>)}
    //     {isAdmin && (<Link to={"/admin"} className="nav-link">Admin Board</Link>)}
    //     {currentUser ? (<>
    //         <div className="col-span-2 flex justify-around w-full items-center">
    //           <IconButton size="large">
    //             <Badge badgeContent={unreadCount} color="primary">
    //               <MailIcon color="action" />
    //             </Badge>
    //           </IconButton>
    //           <img src={`data:image/jpeg;base64,${currentUser.avatar}`} alt=""
    //                className="w-12 h-12 rounded-full border-2" />
    //           <Link to={Pathname.profile} className="nav-link">
    //             Profile, {currentUser.username}
    //           </Link>
    //
    //         </div>
    //         <Link to={Pathname.login} className="nav-link" onClick={() => AuthService.logout()}>
    //           LogOut
    //         </Link>
    //       </>
    //     ) : (
    //       <div className="flex justify-around w-full items-center text-white text-xl4">
    //
    //         <li className="nav-item">
    //           <Link to={Pathname.login} className="nav-link">
    //             Login
    //           </Link>
    //         </li>
    //
    //         <li className="nav-item">
    //           <Link to={Pathname.register} className="nav-link">
    //             Register
    //           </Link>
    //         </li>
    //       </div>
    //     )}

    // </nav>
    // </div>
  );
}

export default Navbar;

import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AuthService from "../../api/authService";
import AuthContext from "../../context/AuthContext";

function Banner({ name, style, subtitle }) {
  const { currentUser } = useContext(AuthContext);
  const { logout } = AuthService;
  const HELP_LINK = "Link for help page";

  return (
    <div className={classNames("banner", style)} data-testid="banner">
      <div className="main-col-1 flex flex-grow">
        <h2 className="text-black flex items-center text-xl6 border-r pr-12 mr-12 h-14 border-gray-80 pl-6">{name}</h2>
        <p className="text-black flex items-center">{subtitle}</p>
        <div className="banner-list flex gap-10 flex-grow">
          {/* <div className="flex-grow flex justify-end items-center">
              {currentUser?.login}
            </div> */}
          <h2 className="flex-grow flex justify-end items-center border-r pr-12 mr-12 h-14 border-gray-80 pl-6">
            {currentUser?.login}
          </h2>
        </div>
      </div>

      <div className="main-col-3 welcome-user pr-6 flex flex-col items-end">
        <div>
          <button type="button" className="text-blue-10 text-base" onClick={logout}>
            {"Log Out"}
          </button>
        </div>
        <div>
          <a href={HELP_LINK} target="_blank" rel="noreferrer" className="text-blue-10 text-base">
            Help
          </a>
        </div>
        <div>
          <button type="button" className="text-blue-10 text-base">
            {"Changelog"}
          </button>
        </div>
      </div>
    </div>
  );
}

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

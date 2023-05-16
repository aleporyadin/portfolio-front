import { Icon } from "@mui/material";
import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

export default function Button({
  buttonStyle,
  color,
  textColor,
  size,
  loading,
  font,
  name,
  handleClick,
  responsiveClick,
  disabled,
  type,
  dataTestid,
  ref_,
  IconComponent
}) {
  const handleResponsiveClick = () => {
    responsiveClick(name);
  };
  return (
    <button
      data-testid={dataTestid}
      className={cn(buttonStyle, {
        blue: color === "blue",
        button: true,
        disabled,
        full: size === "full",
        gray: color === "gray",
        half: size === "half",
        "light-blue": color === "light-blue",
        "primary-btn": color === "primary",
        "secondary-btn": color === "secondary",
        sm: size === "sm",
        // "custom-font": font === "another",
        "text-blue": textColor === "blue",
        "text-gray": textColor === "gray"
      })}
      ref={ref_}
      onClick={responsiveClick ? handleResponsiveClick : handleClick}
      disabled={loading || disabled}
      type={type}
    >
      {loading ? (
        "Loading..."
      ) : IconComponent ? (
        <Icon
          className="ml-2"
          component={IconComponent}
          color="#ffffff"
          style={{ cursor: "pointer", height: "100%", width: "100%" }}/>
      ) : (
        name
      )}
    </button>
  );
}

Button.defaultProps = {
  dataTestid: "",
  disabled: false,
  handleClick: () => {},
  loading: false,
  size: "",
  type: "button"
};

Button.propTypes = {
  color: PropTypes.string,
  dataTestid: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.string
};

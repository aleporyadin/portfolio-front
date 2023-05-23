import PropTypes from "prop-types";
import React from "react";

export default function WrapperForm({ children }) {
  return <div className="sign-up-detail-wrapper bg-gray-60">{children}</div>;
}

WrapperForm.propTypes = {
  children: PropTypes.node.isRequired
};

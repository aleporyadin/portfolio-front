import PropTypes from "prop-types";
import React from "react";

export default function FormHeader({ title, description }) {
  return (
    <div className="block mx-auto mt-4 heading-sign-up">
      <div className="text-black-20 font-bold text-xl6">{title}</div>
      <div className="text-gray-20 text-xl">{description}</div>
    </div>
  );
}

FormHeader.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

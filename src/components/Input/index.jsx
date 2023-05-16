import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

export default function Input({
  id,
  label,
  disabled,
  type,
  value,
  placeholder,
  required,
  children,
  onChange,
  minLength,
  maxLength,
  name,
  pattern,
  title,
  inputStyle,
  labelStyle,
  mainStyle
}) {
  const onChangeHandle = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={mainStyle}>
      {label && (
        <label
          htmlFor={`${name}${label}${type}${placeholder}`}
          className={labelStyle}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={inputStyle}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandle}
        required={required}
        value={value}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        title={title}
      />
      {children}
    </div>
  );
}

Input.defaultProps = {
  children: null,
  disabled: false,
  inputStyle:
    "text-box border-gray-40 p-6 rounded-md hover:border-gray-40 h-11 font-medium",
  labelStyle: "text-gray-30 font-medium label pb-1 text-base",
  mainStyle: "text-input flex flex-col pt-3",
  maxLength: 50,
  minLength: 1,
  name: "",
  onChange: () => {
  },
  pattern: null,
  placeholder: null,
  required: false,
  title: "",
  type: "text",
  value: null
};

Input.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  inputStyle: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

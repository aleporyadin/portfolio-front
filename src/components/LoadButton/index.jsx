import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";

export default function LoadButton({
  type,
  label,
  color,
  variant,
  startIcon,
  disabled,
  onClick,
  loading,
  href,
  name
}) {
  const [isLoading, setIsLoading] = useState(loading);
  const style = { "& .MuiSvgIcon-root": { opacity: disabled ? 0.5 : 1 } };

  const handlerClick = () => {
    setIsLoading(!!loading);
    onClick();
    setIsLoading(false);
  };

  return (
    <LoadingButton
      type={type}
      variant={variant}
      color={color}
      loading={isLoading ? loading : false}
      name={name}
      disabled={disabled}
      href={href}
      onClick={() => handlerClick()}
      sx={style}
      startIcon={startIcon}
    >
      {label}
    </LoadingButton>
  );
}

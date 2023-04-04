import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

export default function ButtonIcon({
  variant,
  disabled,
  startIcon,
  endIcon,
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      {...props}
    />
  );
}

ButtonIcon.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

ButtonIcon.defaultProps = {
  variant: "contained",
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
};

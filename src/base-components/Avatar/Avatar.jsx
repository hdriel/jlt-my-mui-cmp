import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar as MuiAvatar } from "@mui/material";
import { getCapitalLetters, stringToColor } from "../../utils/helpers";

export default function Avatar({
  username,
  image,
  size,
  icon,
  variant,
  color,
  fallbackImage,
  onClick,
}) {
  const [url, setUrl] = useState(image);
  const [fallbackSet, setFallbackSet] = useState(false);

  const errorHandler = () => {
    if (fallbackSet) {
      setUrl(undefined);
    } else {
      setFallbackSet(true);
      setUrl(fallbackImage);
    }
  };

  const background =
    color ?? (url && !username ? undefined : stringToColor(username));

  return (
    <MuiAvatar
      alt={username ?? "avatar"}
      src={url}
      sx={{ width: size, height: size, background }}
      variant={variant}
      imgProps={{ onError: errorHandler }}
      onClick={onClick}
    >
      {!url && (icon ?? getCapitalLetters(username))}
    </MuiAvatar>
  );
}

Avatar.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(["circular", "rounded", "square"]),
  fallbackImage: PropTypes.string,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  username: undefined,
  image: undefined,
  size: undefined,
  icon: undefined,
  variant: "circular",
  fallbackImage: undefined,
  onClick: undefined,
};

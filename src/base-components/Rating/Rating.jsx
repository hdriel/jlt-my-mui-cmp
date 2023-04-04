import React, { useState } from "react";
import { Box as MuiBox, Rating as MuiRating } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

const LABELS = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${LABELS[value]}`;
}

export default function Rating({ value, onChange, disabled, showLabel }) {
  const [hover, setHover] = useState(-1);

  return (
    <MuiBox
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <MuiRating
        name="hover-feedback"
        value={value}
        disabled={disabled}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => onChange?.(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {showLabel && value !== null && (
        <MuiBox sx={{ ml: 2 }}>{LABELS[hover !== -1 ? hover : value]}</MuiBox>
      )}
    </MuiBox>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  showLabel: PropTypes.bool,
};

Rating.defaultProps = {
  value: 0,
  onChange: undefined,
  disabled: false,
  showLabel: true,
};

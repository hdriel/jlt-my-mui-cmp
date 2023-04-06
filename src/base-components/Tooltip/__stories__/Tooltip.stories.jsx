import React from "react";
import Tooltip from "../Tooltip";
import { Button as MuiButton } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { action } from "@storybook/addon-actions";

export default {
  title: "base-components/Tooltip",
  component: Tooltip,
};

export const WithoutChildren = () => {
  return <Tooltip title="Hi Afek">Hello World</Tooltip>;
};

export const WithoutTitle = () => {
  return (
    <Tooltip>
      <ButtonIcon onClick={action("onClick")} startIcon={<SendIcon />}>
        Start Icon
      </ButtonIcon>
    </Tooltip>
  );
};

export const WithChildren = () => {
  return (
    <Tooltip title="Hi Afek">
      <ButtonIcon onClick={action("onClick")} startIcon={<SendIcon />}>
        Start Icon
      </ButtonIcon>
    </Tooltip>
  );
};

export const WithMuiChildren = () => {
  return (
    <Tooltip title="mui tooltip">
      <MuiButton>Mui Button</MuiButton>
    </Tooltip>
  );
};

export const Placement = () => {
  return (
    <Tooltip title="placement tooltip" placement="right">
      <MuiButton>Mui Button</MuiButton>
    </Tooltip>
  );
};

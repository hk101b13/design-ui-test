import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Switch } from "antd";
import styled from "@emotion/styled";
import { ThemeContext, AddImportantToStyles } from "./TThemeProvider.js";
const StyledSwitch = styled(Switch)((props) => {
  const { colorScheme } = useContext(ThemeContext);
  const baseStyle = {
    "&.ant-switch-checked": {
      backgroundColor: `${(colorScheme == null ? void 0 : colorScheme.accent) || "pink"} !important`
    },
    "&.ant-switch-checked .ant-switch-handle::before": {
      backgroundColor: `${(colorScheme == null ? void 0 : colorScheme.main) || "#fff"}!important`
    },
    "&.ant-switch-checked .ant-switch-loading-icon": {
      color: `${(colorScheme == null ? void 0 : colorScheme.text) || "red"}!important`
    },
    "& .ant-wave": {
      "--wave-color": `${(colorScheme == null ? void 0 : colorScheme.accent) || "red"} !important`
    }
  };
  const importantCustomStyle = AddImportantToStyles(props.customStyle);
  return [baseStyle, importantCustomStyle];
});
const TSwitch = (props) => {
  return /* @__PURE__ */ jsx(StyledSwitch, { ...props });
};
export {
  TSwitch
};

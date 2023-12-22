import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "@emotion/styled";
import { ThemeContext, AddImportantToStyles } from "./TThemeProvider.js";
import Switch from "../node_modules/.pnpm/antd@4.24.8_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/switch/index.js";
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

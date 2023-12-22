import { jsx } from "react/jsx-runtime";
import React__default, { useContext } from "react";
import newStyled from "../node_modules/.pnpm/@emotion_styled@11.11.0_@emotion_react@11.11.1_@types_react@18.2.43_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js";
import { ThemeContext, AddImportantToStyles } from "./TThemeProvider.js";
import MColors from "./MColors.json.js";
import Button from "../node_modules/.pnpm/antd@4.24.8_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/button.js";
function SetButtonLayout(size) {
  let buttonLayout = { padding: "10px 20px" };
  switch (size) {
    case "large":
      buttonLayout.padding = "16px 32px";
      break;
    case "middle":
      buttonLayout.padding = "8px 16px";
      break;
    case "small":
      buttonLayout.padding = "4px 8px";
      break;
  }
  return buttonLayout;
}
function SetButtonColors(qtype) {
  const { colorScheme } = useContext(ThemeContext);
  let buttonColor;
  buttonColor = {
    background: MColors.palettes.primary[50],
    onHoverBackground: MColors.palettes.primary[60],
    onActiveWave: MColors.schemes.light.primaryFixedDim,
    text: MColors.schemes.light.onPrimary,
    shadow: MColors.schemes.light.shadow
  };
  if (colorScheme) {
    buttonColor = {
      background: colorScheme.main || buttonColor.background,
      onHoverBackground: colorScheme.secondary || buttonColor.onHoverBackground,
      onActiveWave: colorScheme.accent || buttonColor.onActiveWave,
      shadow: colorScheme.accent || buttonColor.shadow,
      text: colorScheme.text || buttonColor.text
    };
  }
  switch (qtype) {
    case "info":
      buttonColor = {
        background: MColors.palettes.primary[50],
        onHoverBackground: MColors.palettes.primary[60],
        onActiveWave: MColors.schemes.light.primaryFixedDim,
        text: MColors.schemes.light.onPrimary,
        shadow: MColors.schemes.light.shadow
      };
      break;
    case "warning":
      buttonColor = {
        background: MColors.palettes.warning[50],
        onHoverBackground: MColors.palettes.warning[60],
        onActiveWave: MColors.schemes.light.warningFixedDim,
        text: MColors.schemes.light.onWarning,
        shadow: MColors.schemes.light.shadow
      };
      break;
    case "error":
      buttonColor = {
        background: MColors.palettes.error[50],
        onHoverBackground: MColors.palettes.error[60],
        onActiveWave: MColors.schemes.light.errorFixedDim,
        text: MColors.schemes.light.onError,
        shadow: MColors.schemes.light.shadow
      };
      break;
  }
  return buttonColor;
}
const StyledButton = newStyled(Button)((props) => {
  const { fontSize, fontFamily, size } = useContext(ThemeContext);
  let buttonColor = SetButtonColors(props.qtype);
  let buttonLayout = SetButtonLayout(size || props.qsize);
  const baseStyles = {
    width: "auto",
    height: "auto",
    padding: buttonLayout.padding,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: `2px 2px 5px 0px ${buttonColor.shadow}`,
    transition: "all 0.25s ease-in-out",
    marginLeft: "10px",
    backgroundColor: `${buttonColor.background}`,
    fontSize: `${(fontSize == null ? void 0 : fontSize.t3) || 14}px`,
    color: `${buttonColor.text}`,
    fontFamily,
    "&:not(.ant-btn-loading):hover": {
      color: "white !important",
      backgroundColor: `${buttonColor.onHoverBackground}`
    },
    "& .ant-wave": {
      "--wave-color": `${buttonColor.onActiveWave} !important`
    },
    "&.ant-btn-loading": { cursor: "not-allowed" }
  };
  const importantCustomstyles = AddImportantToStyles(props.customstyle);
  return [baseStyles, importantCustomstyles];
});
const TButton = React__default.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    StyledButton,
    {
      className: props.className,
      ref,
      onClick: props.onClick,
      disabled: props.disabled,
      loading: props.loading,
      style: props.style,
      qtype: props.qtype,
      customstyle: props.customstyle,
      qsize: props.qsize,
      children: props.children
    }
  ) });
});
export {
  TButton
};

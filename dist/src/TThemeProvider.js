import { jsx } from "react/jsx-runtime";
import { createContext } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
const AddImportantToStyles = (styles) => {
  if (!styles) {
    return {};
  }
  const importantStyles = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] === "object") {
      importantStyles[key] = AddImportantToStyles(styles[key]);
      return;
    }
    if (styles[key].includes("!important")) {
      importantStyles[key] = styles[key];
    } else {
      importantStyles[key] = `${styles[key]} !important`;
    }
  });
  return importantStyles;
};
const ThemeContext = createContext({
  colorScheme: {},
  locale: "",
  size: "middle",
  fontSize: {},
  fontFamily: ""
});
const TThemeProvider = (props) => {
  const contextValue = {
    colorScheme: props.colorScheme,
    locale: props.locale,
    size: props.size,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
  };
  const { children, localeBundle, locale } = props;
  const newI18n = i18next.createInstance();
  let resources = {};
  if (localeBundle && localeBundle.length > 0) {
    localeBundle.forEach((item) => {
      resources[item.lng] = { [item.ns]: item.resources };
    });
  }
  newI18n.init({
    resources,
    lng: locale,
    fallbackLng: locale,
    interpolation: {
      escapeValue: false
    }
  });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ThemeContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(I18nextProvider, { i18n: newI18n, children }) }) });
};
export {
  AddImportantToStyles,
  TThemeProvider,
  ThemeContext
};

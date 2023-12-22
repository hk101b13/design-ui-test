import { j as jsxRuntimeExports } from "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";
import { createContext } from "react";
import instance from "../node_modules/.pnpm/i18next@23.7.11/node_modules/i18next/dist/esm/i18next.js";
import { I18nextProvider } from "../node_modules/.pnpm/react-i18next@13.5.0_i18next@23.7.11_react-dom@18.2.0_react@18.2.0/node_modules/react-i18next/dist/es/I18nextProvider.js";
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
  const newI18n = instance.createInstance();
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nextProvider, { i18n: newI18n, children }) }) });
};
export {
  AddImportantToStyles,
  TThemeProvider,
  ThemeContext
};

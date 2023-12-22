import { j as jsxRuntimeExports } from "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";
import { useContext } from "react";
import newStyled from "../node_modules/.pnpm/@emotion_styled@11.11.0_@emotion_react@11.11.1_@types_react@18.2.43_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js";
import { ThemeContext, AddImportantToStyles } from "./TThemeProvider.js";
import MColors from "./MColors.json.js";
import Table from "../node_modules/.pnpm/antd@4.24.8_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/table/Table.js";
function setTableColor(tableColor) {
  const { colorScheme } = useContext(ThemeContext);
  let newTableColor = {
    headerColor: MColors.schemes.light.primary,
    rowColor: MColors.schemes.light.onPrimaryContainer,
    hoverRowColor: MColors.schemes.light.primaryContainer,
    textColor: MColors.schemes.light.onPrimary
  };
  if (colorScheme) {
    newTableColor = {
      headerColor: colorScheme.secondary || newTableColor.headerColor,
      rowColor: colorScheme.main || newTableColor.rowColor,
      hoverRowColor: colorScheme.accent || newTableColor.hoverRowColor,
      textColor: colorScheme.text || newTableColor.textColor
    };
  }
  if (tableColor) {
    newTableColor = {
      headerColor: tableColor.headerColor || newTableColor.headerColor,
      rowColor: tableColor.rowColor || newTableColor.rowColor,
      hoverRowColor: tableColor.hoverRowColor || newTableColor.hoverRowColor,
      textColor: tableColor.textColor || newTableColor.textColor
    };
  }
  return newTableColor;
}
const StyledTable = newStyled(Table)((props) => {
  const { fontSize, fontFamily } = useContext(ThemeContext);
  let tableColor = setTableColor(props.tableColor);
  const baseStyle = {
    color: "white",
    transition: "all 0.25s ease-in-out ",
    borderRadius: "8px",
    "& .ant-table-cell": {
      fontFamily: fontFamily || "",
      color: `${tableColor.textColor}`
    },
    "& .ant-table-container": {
      backgroundColor: `${tableColor.rowColor}`
    },
    "& .ant-table-cell-row-hover": {
      backgroundColor: `${tableColor.hoverRowColor} !important`
    },
    "& .ant-table-thead .ant-table-cell": {
      backgroundColor: `${tableColor.headerColor}`
    },
    "& .ant-table-thead .ant-table-cell::before": {
      backgroundColor: "black"
    },
    "&&.ant-spin &&.ant-spin-dot-item": { color: "red" },
    "& th": { fontSize: `${(fontSize == null ? void 0 : fontSize.t3) || 18}px !important` },
    "& td": { fontSize: `${(fontSize == null ? void 0 : fontSize.t4) || 18}px !important` }
  };
  const importantCustomStyle = AddImportantToStyles(props.customStyle);
  return [baseStyle, importantCustomStyle];
});
const TTable = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "1000px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    StyledTable,
    {
      tableColor: props.tableColor,
      pagination: false,
      ...props
    }
  ) });
};
export {
  TTable
};

import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { Table } from "antd";
import styled from "@emotion/styled";
import { ThemeContext, AddImportantToStyles } from "../TThemeProvider/TThemeProvider.js";
import MColors from "../Theme/MColors.json.js";
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
const StyledTable = styled(Table)((props) => {
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
  return /* @__PURE__ */ jsx("div", { style: { width: "1000px" }, children: /* @__PURE__ */ jsx(
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

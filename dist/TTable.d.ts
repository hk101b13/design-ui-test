import { TableProps } from "antd";
import { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";
export interface TTableColor {
    headerColor?: string;
    rowColor?: string;
    hoverRowColor?: string;
    textColor?: string;
}
export interface TTableProps {
    customStyle?: Interpolation<Theme>;
    tableColor?: TTableColor;
}
export declare const TTable: (props: TTableProps & TableProps<any>) => import("react/jsx-runtime").JSX.Element;

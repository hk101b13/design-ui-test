import { SwitchProps } from "antd";
import { Interpolation, Theme } from "@emotion/react";
export interface TSwitchProps {
    customStyle?: Interpolation<Theme>;
}
export declare const TSwitch: (props: SwitchProps & TSwitchProps) => import("react/jsx-runtime").JSX.Element;

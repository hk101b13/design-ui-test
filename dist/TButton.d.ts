import React, { ReactNode } from "react";
import { Interpolation, Theme } from "@emotion/react";
export interface TButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    qtype?: "info" | "success" | "warning" | "error";
    qsize?: "large" | "middle" | "small";
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    customstyle?: Interpolation<Theme>;
}
export declare const TButton: React.ForwardRefExoticComponent<TButtonProps & React.RefAttributes<any>>;

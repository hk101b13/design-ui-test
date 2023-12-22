import React from "react";
import { TFunction } from "i18next";
interface TThemeContextType {
    colorScheme?: {
        text?: string;
        main?: string;
        secondary?: string;
        accent?: string;
    };
    fontSize?: {
        t1?: number;
        t2?: number;
        t3?: number;
        t4?: number;
        t5?: number;
    };
    size?: "small" | "middle" | "large";
    locale?: string;
    fontFamily?: string;
    t?: TFunction;
}
export interface TThemeProviderProps {
    colorScheme?: {
        text?: string;
        main?: string;
        secondary?: string;
        accent?: string;
    };
    fontSize?: {
        t1?: number;
        t2?: number;
        t3?: number;
        t4?: number;
        t5?: number;
    };
    size?: "small" | "middle" | "large";
    locale?: string;
    localeBundle?: {
        lng: string;
        ns: "translation";
        resources: any;
    }[];
    children: any;
    fontFamily?: string;
}
export declare const AddImportantToStyles: (styles: any) => any;
export declare const ThemeContext: React.Context<TThemeContextType>;
export declare const TThemeProvider: (props: TThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};

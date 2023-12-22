declare module "design-ui-test" {
  import { TableProps } from "antd";
  // import styled, { Interpolation } from "@emotion/styled";
  // import { Theme } from "@emotion/react";
  import { SwitchProps } from "antd";
  import { TButtonProps } from "@/TButton";
  import { TSwitchProps } from "@/TSwitch";
  import { TTableProps } from "@/TTable";
  import { TThemeProviderProps } from "@/TThemeProvider";
  import { TCowsayProps } from "@/TCowsay";

  // export interface TTableColor {
  //   headerColor?: string;
  //   rowColor?: string;
  //   hoverRowColor?: string;
  //   textColor?: string;
  // }
  // export interface TTableProps {
  //   customStyle?: Interpolation<Theme>;
  //   tableColor?: TTableColor;
  // }
  // export interface TSwitchProps {
  //   customStyle?: Interpolation<Theme>;
  // }
  // export interface TButtonProps {
  //   onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  //   qtype?: "info" | "success" | "warning" | "error";
  //   qsize?: "large" | "middle" | "small";

  //   disabled?: boolean;
  //   loading?: boolean;
  //   children?: ReactNode;
  //   className?: string;
  //   style?: React.CSSProperties;
  //   customstyle?: Interpolation<Theme>;
  // }
  // export interface TThemeProviderProps {
  //   colorScheme?: {
  //     text?: string;
  //     main?: string;
  //     secondary?: string;
  //     accent?: string;
  //   };
  //   fontSize?: {
  //     t1?: number;
  //     t2?: number;
  //     t3?: number;
  //     t4?: number;
  //     t5?: number;
  //   };
  //   size?: "small" | "middle" | "large";
  //   locale?: string;
  //   localeBundle?: { lng: string; ns: "translation"; resources: any }[];
  //   children: any;
  //   fontFamily?: string;
  // }
  // export interface TCowsayProps {
  //   content?: string;
  // }
  const TTransfer: React.FC;
  const TTable: React.FC<TTableProps & TableProps<any>>;
  const TSwitch: React.FC<TSwitchProps & SwitchProps>;
  const TButton: React.FC<TButtonProps>;
  const TThemeProvider: React.FC<TThemeProviderProps>;
  const TCowsay: React.FC<TCowsayProps>;
  export { TTransfer, TTable, TSwitch, TButton, TThemeProvider, TCowsay };
}

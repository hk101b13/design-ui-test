declare module "design-ui-test" {
  import { TableProps } from "antd";
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
  export interface TCowsayProps {
    content?: string;
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
    localeBundle?: { lng: string; ns: "translation"; resources: any }[];
    children: any;
    fontFamily?: string;
  }

  export interface TSwitchProps {
    customStyle?: Interpolation<Theme>;
  }

  const TTable: React.FC<TableProps<any>>;
  const TButton: React.FC<TButtonProps>;
  const TCowsay: React.FC<TCowsayProps>;
  const TThemeProvider: React.FC<TThemeProviderProps>;
  const TSwitch: React.FC<TSwitchProps & SwitchProps>;

  export { TButton, TCowsay, TThemeProvider, TSwitch, TTable };
}

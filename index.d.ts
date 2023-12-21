declare module "design-ui-test/TTransfer" {
  const TTransfer: React.FC;

  export { TTransfer };
}

declare module "design-ui-test/TSwitch" {
  export interface TSwitchProps {
    customStyle?: Interpolation<Theme>;
  }

  const TSwitch: React.FC<TSwitchProps & SwitchProps>;

  export { TSwitch };
}

declare module "design-ui-test/TCowsay" {
  export interface TCowsayProps {
    content?: string;
  }

  const TCowsay: React.FC<TCowsayProps>;

  export { TCowsay };
}

declare module "design-ui-test/TThemeProvider" {
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

  const TThemeProvider: React.FC<TThemeProviderProps>;

  export { TThemeProvider };
}

declare module "design-ui-test/TButton" {
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
  const TButton: React.FC<TButtonProps>;

  export { TButton };
}

declare module "design-ui-test/TTable" {
  import { TableProps } from "antd";
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

  const TTable: React.FC<TTableProps & TableProps<any>>;

  export { TTable };
}

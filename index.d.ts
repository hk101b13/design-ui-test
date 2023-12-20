declare module "design-ui-test" {
  export interface TButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    qType?: string;
    qSize?: string;

    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    customStyle?: Interpolation<Theme>;
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

  const TButton: React.FC<TButtonProps>;
  const TCowsay: React.FC<TCowsayProps>;
  const TThemeProvider: React.FC<TThemeProviderProps>;

  export { TButton, TCowsay, TThemeProvider };
}

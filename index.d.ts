declare module "design-ui-test" {
  export interface TCowsayProps {
    content?: string;
  }

  const TButton: React.FC;
  const TCowsay: React.FC<TCowsayProps>;

  export { TButton, TCowsay };
}

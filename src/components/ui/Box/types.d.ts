export type BorderType = {
  borderbat?: 'top' | 'bottom' | 'tpb' | 'none';
  borderlar?: 'left' | 'right' | 'lfr' | 'none';
  padding?: string;
};

export interface IBoxProps extends BorderType {
  children: ReactNode;
  splitChildren: ReactNode;
  icon?: ReactNode;
  verticalAlign?: 'center' | 'flex-end';
  horizontalAlign?: 'center' | 'space-between';
  area?: string;
}

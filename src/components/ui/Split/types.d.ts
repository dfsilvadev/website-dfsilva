import { HTMLAttributes, ReactNode } from 'react';

type SplitDivType = HTMLAttributes<HTMLSpanElement>;

export type SplitPropsTypes = {
  as?: ElementType;
  children: ReactNode;
  splitChildren: ReactNode;
  fontSize?: '1.2rem' | '1.4rem' | '1.6rem' | '1.8rem' | '2.4rem' | '4.8rem';
  contentsize?: '1.8rem' | '2rem' | '2.2rem' | '2.4rem' | '3rem' | '5.4rem';
  color?: 'default' | 'heading' | 'white' | 'gray100' | 'gray200';
  weight?: number;
} & SplitDivType;

export type SplitContentStyleProps = Omit<
  SplitPropsTypes,
  'children' | 'splitChildren'
>;

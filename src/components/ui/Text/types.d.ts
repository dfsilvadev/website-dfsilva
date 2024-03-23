import {
  AnchorHTMLAttributes,
  ElementType,
  HTMLAttributes,
  ReactNode
} from 'react';

type TextTypes =
  | HTMLAttributes<HTMLParagraphElement>
  | HTMLAttributes<HTMLHeadingElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLSpanElement>;

export type TextContentStyleProps = Omit<TextProps, 'children'>;

export type TextProps = {
  children: ReactNode;
  as?: ElementType;
  size?:
    | '1.2rem'
    | '1.4rem'
    | '1.6rem'
    | '1.8rem'
    | '2.4rem'
    | '4.8rem'
    | '0.56em';
  weight?: number;
  color?: 'default' | 'heading' | 'white' | 'gray100' | 'gray200';
  texttransform?: 'inherit' | 'uppercase';
} & TextTypes;

import { HTMLAttributes, ReactNode } from 'react';

export type MoveUpInType = HTMLAttributes<HTMLSpanElement>;

export interface IMoveUpInProps extends MoveUpInType {
  children: ReactNode;
}

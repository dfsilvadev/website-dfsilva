import { ForwardRefRenderFunction, RefObject, forwardRef } from 'react';

import * as S from './styles';

import { TextProps } from './types';

const Text: ForwardRefRenderFunction<
  RefObject<typeof S.TextContent>,
  TextProps
> = (
  {
    children,
    size = '1.8rem',
    weight = 300,
    color = 'default',
    texttransform = 'inherit',
    ...props
  },
  ref
) => {
  return (
    <S.TextContent
      size={size}
      weight={weight}
      color={color}
      texttransform={texttransform}
      ref={ref}
      {...props}
    >
      {children}
    </S.TextContent>
  );
};

export default forwardRef(Text);

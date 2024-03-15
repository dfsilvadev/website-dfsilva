import { useLayoutEffect, useRef } from 'react';

import * as S from './styles';

import { splitElementAnimation } from './animation';

import { SplitPropsTypes } from './types';

const Split = ({
  children,
  splitChildren,
  fontSize = '2.4rem',
  contentsize = '3rem',
  color = 'gray200',
  weight = 300,
  ...props
}: SplitPropsTypes) => {
  const splitElementRef = useRef<HTMLSpanElement>(null);
  const ctx = useRef<gsap.Context | null>();

  const onEnter = () => {
    if (ctx.current) {
      ctx.current.onEnter();
    }
  };

  const onLeave = () => {
    if (ctx.current) {
      ctx.current.onLeave();
    }
  };

  useLayoutEffect(() => {
    ctx.current = splitElementAnimation(splitElementRef);

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.SplitContent
      fontSize={fontSize}
      contentsize={contentsize || '3rem'}
      color={color}
      weight={weight}
      ref={splitElementRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...props}
    >
      <S.SplitChildren>{children}</S.SplitChildren>
      <S.SplitChildren>{splitChildren}</S.SplitChildren>
    </S.SplitContent>
  );
};

export default Split;

import { useLayoutEffect, useRef } from 'react';

import { Flex } from '@/components';

import { onHoverBoxAnimation } from './animation';

import * as S from './styles';

import { IBoxProps } from './types';
const Box = ({
  children,
  splitChildren,
  icon,
  verticalAlign = 'flex-end',
  horizontalAlign = 'space-between',
  area,
  padding = '3.2rem',
  borderbat = 'tpb',
  borderlar = 'lfr'
}: IBoxProps) => {
  const splitElementRef = useRef<HTMLDivElement>(null);
  const gridBoxRef = useRef<HTMLDivElement>(null);
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
    ctx.current = onHoverBoxAnimation(gridBoxRef, splitElementRef);

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.BoxContent
      align={verticalAlign}
      borderbat={borderbat}
      borderlar={borderlar}
      padding={padding}
      ref={gridBoxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        gridArea: `${area ? area : ''}`
      }}
    >
      <Flex
        align="center"
        justify={horizontalAlign}
        style={{
          width: '100%'
        }}
      >
        <S.BoxSplitWrapper ref={splitElementRef}>
          <S.BoxSplitChildren>{children}</S.BoxSplitChildren>
          <S.BoxSplitChildren>{splitChildren}</S.BoxSplitChildren>
        </S.BoxSplitWrapper>

        {!!icon && icon}
      </Flex>
    </S.BoxContent>
  );
};

export default Box;

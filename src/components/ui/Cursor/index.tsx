import { useEffect, useRef } from 'react';

import {
  cursorMouseAnimation,
  onMouseMove,
  viewAllCursorAnimation
} from './animation';

import * as S from './styles';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const polygonCursorRef = useRef<HTMLDivElement>(null);
  const viewAllCursorRef = useRef<HTMLDivElement>(null);
  const cursorCtx = useRef<gsap.Context | null>(null);
  const viewAllCtx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    const viewAllContentList = document.querySelectorAll('.view-all-content');

    cursorCtx.current = cursorMouseAnimation(polygonCursorRef);
    viewAllCtx.current = viewAllCursorAnimation(
      viewAllCursorRef,
      polygonCursorRef,
      cursorRef
    );

    document.addEventListener('mousemove', (evt) =>
      onMouseMove(evt, cursorRef)
    );

    viewAllContentList.forEach((content) => {
      content.addEventListener('mouseenter', () =>
        viewAllCtx.current?.onEnter()
      );
      content.addEventListener('mouseleave', () =>
        viewAllCtx.current?.onLeave()
      );
    });

    links?.forEach((link) => {
      link.addEventListener('mouseenter', () => cursorCtx.current?.onEnter());
      link.addEventListener('mouseleave', () => cursorCtx.current?.onLeave());
    });

    buttons?.forEach((button) => {
      button.addEventListener('mouseenter', () => cursorCtx.current?.onEnter());
      button.addEventListener('mouseleave', () => cursorCtx.current?.onLeave());
    });

    return () => {
      cursorCtx.current && cursorCtx.current.revert();
      document.removeEventListener('mousemove', (evt) =>
        onMouseMove(evt, cursorRef)
      );
    };
  }, []);

  return (
    <S.CursorContent ref={cursorRef}>
      <S.ViewAllCursor ref={viewAllCursorRef}>
        <span>saiba mais</span>
      </S.ViewAllCursor>
      <S.PolygonCursor ref={polygonCursorRef} />
    </S.CursorContent>
  );
};

export default Cursor;

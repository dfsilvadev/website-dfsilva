import { RefObject } from 'react';
import gsap from 'gsap';

import { DefaultTheme } from '@/styles';

export const cursorMouseAnimation = (
  polygonCursorRef: RefObject<HTMLDivElement>
) => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.easeInOut',
          duration: 0.4
        }
      })
      .to(polygonCursorRef.current, {
        scale: 2,
        borderColor: DefaultTheme.colors.primary.main
      });
    self.add('onEnter', () => {
      tl.play();
    });

    self.add('onLeave', () => {
      tl.reverse();
    });
  });
};

export const viewAllCursorAnimation = (
  viewAllCursorRef: RefObject<HTMLDivElement>,
  polygonCursorRef: RefObject<HTMLDivElement>,
  cursorRef: RefObject<HTMLDivElement>
) => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.easeInOut',
          duration: 0.15
        }
      })
      .to(cursorRef.current, {
        mixBlendMode: 'normal'
      })
      .to(viewAllCursorRef.current, {
        scale: 1,
        opacity: 1,
        display: 'flex'
      })
      .to(polygonCursorRef.current, {
        scale: 0,
        opacity: 0,
        display: 'none'
      });
    self.add('onEnter', () => {
      tl.play();
    });

    self.add('onLeave', () => {
      tl.reverse();
    });
  });
};

export const onMouseMove = (
  evt: globalThis.MouseEvent,
  cursorRef: RefObject<HTMLDivElement>
) => {
  const { clientX, clientY } = evt;
  gsap.to(cursorRef.current, {
    x: clientX,
    y: clientY
  });
};

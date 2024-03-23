import { RefObject } from 'react';
import gsap from 'gsap';

export const splitElementAnimation = (
  splitElementRef: RefObject<HTMLSpanElement>
) => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.inOut',
          duration: 0.4
        }
      })
      .to(
        splitElementRef.current!.children,
        {
          yPercent: -100,
          stagger: -0.05
        },
        0
      );
    self.add('onEnter', () => {
      tl.play();
    });

    self.add('onLeave', () => {
      tl.reverse();
    });
  });
};

/* eslint-disable react-hooks/rules-of-hooks */
import React, { PropsWithChildren, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function index({ children }: PropsWithChildren) {
  const magnetic = useRef(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });

    if (magnetic.current) {
      (magnetic.current as HTMLElement).addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = (
          magnetic.current as unknown as HTMLElement
        ).getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.65);
        yTo(y * 0.65);
      });
      (magnetic.current as HTMLElement).addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
      });
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.cloneElement(children as React.ReactElement<any>, {
    ref: magnetic
  });
}

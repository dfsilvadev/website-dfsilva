import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import * as S from './styles';

const Status = () => {
  const bubblePulseRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(bubblePulseRef.current, {
      scale: 0,
      ease: 'power1.easeOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <S.StatusContent>
      <S.StatusBubble />
      <S.StatusBubblePulse ref={bubblePulseRef} />
    </S.StatusContent>
  );
};

export default Status;

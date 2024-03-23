import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { Box } from '@/components';

import * as S from './styles';
import Image from 'next/image';

const Gooey = () => {
  const oneShapeRef = useRef(null);
  const twoShapeRef = useRef(null);
  const threeShapeRef = useRef(null);

  useGSAP(() => {
    const config = {
      repeat: -1,
      duration: 0.5,
      stagger: -0.05,
      repeatDelay: 0.5
    };

    const oneTl = gsap.timeline({ ...config });
    oneTl
      .to(oneShapeRef.current, {
        yPercent: 95,
        repeat: 1,
        yoyo: true,
        repeatDelay: 1.5,
        ease: 'power1.out',
        transformOrigin: 'center top'
      })
      .to(
        twoShapeRef.current,
        {
          yPercent: -95,
          repeat: 1,
          yoyo: true,
          repeatDelay: 1.5,
          delay: 0.5,
          ease: 'power1.out',
          transformOrigin: 'center top'
        },
        0.5
      )
      .to(
        threeShapeRef.current,
        {
          yPercent: 95,
          repeat: 1,
          yoyo: true,
          repeatDelay: 1.5,
          delay: 0.5,
          ease: 'power1.out',
          transformOrigin: 'center top'
        },
        1
      );
  });

  return (
    <S.GooeyContent>
      <div className="group first-shape second-shape">
        <div className="item" ref={oneShapeRef}>
          <Box
            splitChildren={
              <Image
                src="images/svg/icons/react_icon.svg"
                alt="React logo"
                width={28}
                height={28}
                priority
              />
            }
            verticalAlign="center"
            horizontalAlign="center"
            borderbat="none"
            borderlar="none"
          >
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={28}
              height={28}
              priority
            />
          </Box>
        </div>
        <div className="item mt-95" ref={twoShapeRef} />
        <div className="item" ref={threeShapeRef} />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="first-shape">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          <filter id="second-shape">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </S.GooeyContent>
  );
};

export default Gooey;

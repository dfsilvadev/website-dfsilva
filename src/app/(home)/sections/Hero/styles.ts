'use client';

import { FlexComponent } from '@/components/ui/Flex';
import styled, { css } from 'styled-components';

export const HeroContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.gray[800]};
    padding: 6rem 1.5rem;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 992px) {
      padding: 6rem;
    }
  `}
`;

export const HeroOccupation = styled(FlexComponent)`
  height: 100%;
`;

export const HeroInfo = styled.div`
  ${({ theme }) => css`
    width: min(99.2rem, 100%);
    margin: 0 auto;
    position: relative;

    font-size: min(18vw, 16.6rem);
    line-height: 90%;
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.text.heading};
    font-size-adjust: 0.54;

    & > img {
      position: absolute;
    }

    .gradient {
      background: ${theme.colors.gradient.base};
      background: ${theme.colors.gradient.linear};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

export const HeroFooter = styled(FlexComponent)`
  @media (max-width: 512px) {
    .display-none {
      display: none;
    }
  }
`;

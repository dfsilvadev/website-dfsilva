'use client';

import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/ui/Flex';

export const HeroContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.gray[800]};
    overflow: hidden;

    display: grid;
    grid-template-rows: 1.5fr 1fr;

    @media (min-width: 992px) {
      height: 90vh;

      grid-template-columns: 1.5fr 1fr;
      grid-template-rows: auto;
    }
  `}
`;

export const LeftColumn = styled(FlexComponent)`
  padding: 3.2rem 1.5rem;

  @media (min-width: 992px) {
    padding: 3.2rem 6rem;
  }
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

    .letter:hover {
      color: ${theme.colors.primary.main} !important;
    }
  `}
`;

export const RightColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'react react react react'
    'next next next next'
    'node node node node';

  @media (min-width: 992px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'react react next next'
      'react react next next'
      'react react node node'
      'react react node node';
  }
`;

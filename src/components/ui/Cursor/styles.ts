'use client';

import styled, { css } from 'styled-components';

export const CursorContent = styled.div`
  ${({ theme }) => css`
    position: fixed;
    pointer-events: none;
    z-index: ${theme.layers.alwaysOnTop};
    background: transparent;
    mix-blend-mode: difference;
    z-index: ${theme.layers.alwaysOnTop};

    display: none;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const PolygonCursor = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: -8px;
    left: -8px;
    width: 0.9rem;
    height: 0.9rem;
    pointer-events: none;
    padding: 0.5rem;
    border: 1px solid ${theme.colors.white};
    transform: rotate(-45deg);

    display: none;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const ViewAllCursor = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: -5rem;
    left: -5rem;
    width: 10rem;
    height: 10rem;
    background-color: ${theme.colors.primary.main};
    border-radius: 50%;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.weight.medium};
    transform: scale(0);
    opacity: 0;
    display: none;
    align-items: center;
    justify-content: center;
  `}
`;

'use client';

import styled, { css } from 'styled-components';

export const StatusContent = styled.div`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
`;

export const StatusBubble = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${theme.colors.green.main};
    border-radius: 50%;
  `}
`;

export const StatusBubblePulse = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.green.main};
    border-radius: 50%;
    opacity: 0.15;
  `}
`;

'use client';

import styled, { DefaultTheme, css } from 'styled-components';

import { FlexComponent } from '@/components/ui/Flex';

import { BorderType } from './types';

export const BoxContent = styled(FlexComponent)<BorderType>`
  ${({ theme, borderbat, borderlar, padding }) => css`
    width: 100%;
    height: 100%;
    padding: ${padding};
    color: ${theme.colors.gray[200]};
    border: 1px solid transparent;

    svg {
      font-size: inherit;
    }

    ${!!borderbat && borderTopAndBottomVariant[borderbat](theme)}
    ${!!borderlar && borderLeftAndRightVariant[borderlar](theme)}
  `}
`;

export const BoxSplitWrapper = styled.span`
  width: fit-content;
  height: 3rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BoxSplitChildren = styled.span`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    color: ${theme.colors.gray[200]};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1;
  `}
`;

const borderTopAndBottomVariant = {
  top: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
  `,
  bottom: (theme: DefaultTheme) => css`
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `,
  tpb: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `,
  none: () => css`
    border-top: none;
    border-bottom: none;
  `
};

const borderLeftAndRightVariant = {
  left: (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
  `,
  right: (theme: DefaultTheme) => css`
    border-right: 1px solid ${theme.colors.gray[100]};
  `,
  lfr: (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
    border-right: 1px solid ${theme.colors.gray[100]};
  `,
  none: () => css`
    border-left: none;
    border-right: none;
  `
};

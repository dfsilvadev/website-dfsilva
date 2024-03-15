'use client';

import styled, { css, DefaultTheme } from 'styled-components';

import { SplitContentStyleProps } from './types';

export const SplitContent = styled.span.withConfig({
  shouldForwardProp: (props) => !['contentsize'].includes(props)
})<SplitContentStyleProps>`
  ${({ theme, fontSize, contentsize, color, weight }) => css`
    width: fit-content;
    height: ${contentsize};
    font-size: ${fontSize};
    font-weight: ${weight};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${!!color && splitContentTextColorVariant[color](theme)}
  `}
`;

export const SplitChildren = styled.span`
  padding: 0.5rem 0;
  line-height: 1;
`;

const splitContentTextColorVariant = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.main};
  `,

  heading: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.heading};
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  gray100: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[100]};
  `,

  gray200: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[200]};
  `
};

import styled, { css } from 'styled-components';

import { LogoProps } from './types';

const logoVariant = {
  sm: () => css`
    width: 2.4rem;
    height: 2.4rem;
  `,
  md: () => css`
    width: 3.6rem;
    height: 3.6rem;
  `,
  lg: () => css`
    width: 5.2rem;
    height: 5.2rem;
  `
};

export const LogoContent = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${color && theme.colors[color].main};

    ${!!size && logoVariant[size]};
  `}
`;

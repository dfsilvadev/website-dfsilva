'use client';

import styled, { css } from 'styled-components';

export const GooeyContent = styled.div`
  ${({ theme }) => css`
    height: 200px;

    .group {
      display: flex;
      width: fit-content;
    }

    .first-shape {
      filter: url('#first-shape');
    }

    .second-shape {
      filter: url('#second-shape');
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: ${theme.colors.primary.dark};
    }

    .item.mt-95 {
      margin-top: 95px;
    }
  `}
`;

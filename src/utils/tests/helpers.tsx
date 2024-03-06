import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { DefaultTheme } from '@/styles';

export const renderWithTheme = (
  children: ReactNode,
  options?: RenderOptions
): RenderResult =>
  render(
    <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>,
    options
  );

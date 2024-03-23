'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultTheme, GlobalStyles } from '@/styles/';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

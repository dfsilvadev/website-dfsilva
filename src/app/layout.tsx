import type { Metadata } from 'next';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

import { Providers } from './providers';

import StyledComponentsRegistry from '@/lib/registry';

const poppins = Poppins({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Daniel Silva • Sênior Front-End Developer',
  description: 'Desenvolver se tornou um hobby favorito!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Daniel Silva &bull; Sênior Front-End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dfsilva.dev" />

        <meta
          name="keywords"
          content="front-end, desenvolvedor front-end, front end, daniel silva front end, dfsilva front end, daniel silva, dfsilva, dev, dev front-end, desenvolver sites, programação de sites, portfolio"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

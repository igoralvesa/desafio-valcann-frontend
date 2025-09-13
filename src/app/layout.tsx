import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FiltersProvider } from '@/context/FiltersProvider';
import QueryProvider from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UniverseEx',
  description: 'Images from NASA API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='dark'
    >
      <body>
        <QueryProvider>
          <FiltersProvider>
            <Header />
            <Container>
              {children}

              <Footer />
            </Container>
          </FiltersProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

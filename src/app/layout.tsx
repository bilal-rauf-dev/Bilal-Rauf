import type { Metadata } from 'next';
import { Header } from './components/site-chrome';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Bilal Rauf — AI & Full-Stack Developer', template: '%s — Bilal Rauf' },
  description:
    'Building applied LLM products, automation pipelines, and production web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Header />{children}</body>
    </html>
  );
}

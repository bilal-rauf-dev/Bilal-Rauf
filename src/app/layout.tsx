import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bilal Rauf — AI & Full-Stack Developer',
  description:
    'Building applied LLM products, automation pipelines, and production web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

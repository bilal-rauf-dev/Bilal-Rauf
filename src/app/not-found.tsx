import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="error-page">
      <p className="error-eyebrow">404</p>
      <h1>This page does not exist.</h1>
      <p>Return to Bilal Rauf&apos;s portfolio to continue exploring the work.</p>
      <Link href="/">Back to the portfolio</Link>
    </main>
  );
}

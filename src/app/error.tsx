'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="error-page">
      <p className="error-eyebrow">Portfolio unavailable</p>
      <h1>Something interrupted the page.</h1>
      <p>Please reload the portfolio or try again in a moment.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}

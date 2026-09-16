import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/"><em>Bilal</em> Rauf</Link>
        <nav aria-label="Main navigation">
          <Link href="/work">Work</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <p>Have something to build?</p>
        <a href="mailto:bilal.rauf2004@outlook.com">bilal.rauf2004@outlook.com</a>
        <div><a href="https://github.com/bilal-rauf-dev" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/bilal-rauf-dev" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
      <div className="footer-band">BILAL RAUF — BILAL RAUF — BILAL RAUF —</div>
    </footer>
  );
}

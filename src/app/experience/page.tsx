import type { Metadata } from 'next';
import { Footer } from '../components/site-chrome';
import { education, experience } from '../data/portfolio';

export const metadata: Metadata = { title: 'Experience', description: 'Experience, education, and honours of Bilal Rauf.' };

function Timeline({ title, items, label }: { title: string; label: string; items: Array<{ period: string; role?: string; title?: string; organisation?: string; institution?: string; detail: string }> }) {
  return <section className="timeline"><div className="timeline-heading"><p className="mono">{label}</p><h2>{title}</h2></div><div>{items.map((item) => <article className="timeline-item" key={`${item.period}-${item.role ?? item.title}`}><p className="mono">{item.period}</p><div><h3>{item.role ?? item.title}</h3><strong>{item.organisation ?? item.institution}</strong><p>{item.detail}</p></div></article>)}</div></section>;
}

export default function ExperiencePage() {
  return <main><section className="page-intro shell"><p className="mono">Path so far</p><h1>Learning by <em>shipping.</em></h1><p>Professional work, structured learning, and the academic foundations that make the next project better than the last.</p></section><div className="shell timelines"><Timeline label="Experience" title="Where I&apos;ve worked." items={experience} /><Timeline label="Education & honours" title="How I&apos;m building depth." items={education} /><section className="honours"><p className="mono">Recognition</p><h2>5th place — GDGoC Build with AI Hackathon</h2><p>Prototyped and deployed a functional AI product under time pressure, competing with university teams.</p><h2>Bronze Medal — Fall 2025</h2><p>Awarded for academic excellence at FAST-NUCES.</p></section></div><Footer /></main>;
}

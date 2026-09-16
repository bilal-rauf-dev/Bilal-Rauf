import Link from 'next/link';
import { Footer } from './components/site-chrome';
import { ProjectCard } from './components/project-card';
import { featuredProjects } from './data/portfolio';

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <p className="mono status">Available for internships</p>
        <div className="hero-grid">
          <div>
            <h1><span>BILAL</span><span className="outline">RAUF</span><em>developer</em></h1>
            <p className="hero-copy">AI and full-stack engineering, with a bias for taking a good idea all the way to a working product.</p>
            <div className="actions"><Link className="button solid" href="/work">Explore work <b>↗</b></Link><a className="button ghost" href="#contact">Start a conversation <b>↗</b></a></div>
          </div>
          <dl className="readouts">
            <div><dt>Discipline</dt><dd>AI & Full-Stack Engineering</dd></div>
            <div><dt>Currently</dt><dd>Full-Stack Dev Intern @ 9Nine</dd></div>
            <div><dt>Based in</dt><dd>Lahore, Pakistan</dd></div>
            <div><dt>Focus</dt><dd>Applied LLM products & reliable systems</dd></div>
          </dl>
        </div>
      </section>

      <section className="feature shell">
        <div className="section-heading"><div><p className="mono">Selected readout — 2026</p><h2>Work worth a <em>closer look.</em></h2></div><Link className="text-link" href="/work">View all projects ↗</Link></div>
        <div className="project-grid featured-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </section>

      <section className="now-section">
        <div className="shell now-grid">
          <p className="mono">Now</p>
          <div><h2>Building production web experiences and sharpening the <em>systems behind them.</em></h2><p>From a 51-page agency platform to database-heavy management tools and applied AI experiments, the focus is deliberate: work that feels good to use and holds up underneath.</p></div>
          <Link className="text-link" href="/experience">Experience & education ↗</Link>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="mono">Direct line</p>
        <div><h2>Let&apos;s make something <em>useful.</em></h2><p>For an internship, a project, or a thoughtful conversation about product engineering.</p></div>
        <div className="contact-links"><a href="mailto:bilal.rauf2004@outlook.com">bilal.rauf2004@outlook.com</a><a href="https://linkedin.com/in/bilal-rauf-dev" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/bilal-rauf-dev" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>
      <Footer />
    </main>
  );
}

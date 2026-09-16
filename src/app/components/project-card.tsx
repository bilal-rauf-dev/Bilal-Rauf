import type { Project } from '../data/portfolio';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <span className="mono">{String(index + 1).padStart(2, '0')}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-links">
        {project.href && <a href={project.href} target="_blank" rel="noreferrer">Live ↗</a>}
        {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">GitHub ↗</a>}
      </div>
    </article>
  );
}

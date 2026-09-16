import type { Metadata } from 'next';
import { Footer } from '../components/site-chrome';
import { ProjectCard } from '../components/project-card';
import { projectGroups } from '../data/portfolio';

export const metadata: Metadata = { title: 'Work', description: 'Selected full-stack, AI, search, and systems projects by Bilal Rauf.' };

export default function WorkPage() {
  return <main><section className="page-intro shell"><p className="mono">Project index — 2024 / 2026</p><h1>Things I&apos;ve <em>built.</em></h1><p>Complete systems, experiments, and technical explorations. Each project earns its place here by teaching something real.</p></section><div className="shell catalogue">{projectGroups.map((group) => <section className="project-group" key={group.label}><p className="mono">{group.label}</p><div className="project-grid">{group.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></section>)}</div><Footer /></main>;
}

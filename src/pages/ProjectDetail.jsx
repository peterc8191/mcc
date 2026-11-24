import { Link, useParams, Navigate } from "react-router-dom";
import projects, { getProjectBySlug } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectGallery from "../components/ProjectGallery";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const details = [
    { label: "Location", value: project.location },
    { label: "Duration", value: project.duration },
    { label: "Completed", value: project.year },
  ].filter((item) => item.value);

  return (
    <>
      <section
        className="project-hero"
        style={{ "--hero-image": `url("${project.hero}")`, "--hero-fallback": project.gradient }}
      >
        <div className="container project-hero__inner">
          <Link to="/projects" className="project-hero__back">
            &larr; All projects
          </Link>
          <span className="pill project-hero__pill">{project.category}</span>
          <h1>{project.location}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container project-detail-grid">
          <div className="project-detail-main">
            <h2>Project overview</h2>
            <p className="project-detail-description">{project.description}</p>

            <h3>Key features</h3>
            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            {project.stats?.length > 0 && (
              <div className="project-stats">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="project-stats__item">
                    <span className="project-stats__value">{stat.value}</span>
                    <span className="project-stats__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="project-detail-sidebar">
            <h4>Project details</h4>
            <dl>
              {details.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <a href="#contact" className="btn btn-primary project-detail-sidebar__cta">
              Discuss a similar project
            </a>
          </aside>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="section section-tight project-gallery-section">
          <div className="container">
            <span className="eyebrow">Gallery</span>
            <h2 className="section-heading">Project photos</h2>
            <ProjectGallery images={project.gallery} title={project.location} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section section--muted">
          <div className="container">
            <span className="eyebrow">More {project.category.toLowerCase()} work</span>
            <h2 className="section-heading">Related projects</h2>
            <div className="grid grid-3" style={{ marginTop: 40 }}>
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

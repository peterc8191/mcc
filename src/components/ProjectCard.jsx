import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__image" style={{ background: project.gradient }}>
        <img src={project.hero} alt="" loading="lazy" />
        <span className="pill project-card__pill">{project.category}</span>
      </div>
      <div className="project-card__body">
        {project.year && <span className="project-card__meta">{project.year}</span>}
        <h3>{project.location}</h3>
        <p>{project.summary}</p>
        <span className="project-card__link">View project &rarr;</span>
      </div>
    </Link>
  );
}

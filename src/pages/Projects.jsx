import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="page-hero page-hero--waves">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h1>Projects across Ireland.</h1>
          <p className="page-hero__subtext">
            A selection of commercial and industrial projects
            completed by our in-house team. Select a project to see the full case study.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects-filter__btn ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="section-subtext">No projects found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import projects from "../data/projects";
import specialities from "../data/specialities";
import ProjectCard from "../components/ProjectCard";
import SpecialityCard from "../components/SpecialityCard";
import CountUp from "../components/CountUp";
import "./Home.css";

const stats = [
  { value: "25+", label: "Years in business" },
  { value: "180+", label: "Projects delivered" },
  { value: "0", label: "Lost-time incidents in 2024" },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">Building across Ireland since 1999</span>
          <h1 className="hero__title">Construction built on precision, safety, and trust.</h1>
          <p className="hero__subtitle">
            Michael Connolly Contracts delivers commercial, residential, civil, and industrial projects from groundworks
            to handover on time and on budget.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn-primary">
              View Our Projects
            </Link>
            <a href="#contact" className="btn btn-outline">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-bar__item">
              <span className="stats-bar__value">
                <CountUp value={stat.value} />
              </span>
              <span className="stats-bar__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h2 className="section-heading">Our specialities</h2>
          <p className="section-subtext">
            A full-service construction partner across six core sectors, backed by an in-house team of engineers,
            trades, and project managers.
          </p>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {specialities.slice(0, 3).map((item) => (
              <SpecialityCard key={item.id} speciality={item} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/about" className="btn btn-outline-dark">
              See all specialities
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <span className="eyebrow">Recent work</span>
          <h2 className="section-heading">Featured projects</h2>
          <p className="section-subtext">
            A selection of recently completed developments across commercial, residential, and civil sectors.
          </p>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/projects" className="btn btn-outline-dark">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us about your site, scope, and timeline &mdash; we'll come back with a straight answer.</p>
          </div>
        </div>
      </section>
    </>
  );
}

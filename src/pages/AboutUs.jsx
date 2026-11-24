import specialities from "../data/specialities";
import SpecialityCard from "../components/SpecialityCard";
import "./AboutUs.css";

const timeline = [
  { year: "1999", text: "Founded in Dundalk as a residential groundworks contractor." },
  { year: "2006", text: "Expanded into commercial fit-out and civil engineering works." },
  { year: "2014", text: "Delivered first design-and-build industrial contract." },
  { year: "2024", text: "180+ projects completed, operating nationwide from a 40-strong team." },
];

const values = [
  {
    title: "Safety first",
    text: "Every site runs to a zero-harm standard, with site-specific safety plans and daily toolbox talks.",
  },
  {
    title: "Straight talking",
    text: "Clear, honest communication with clients and subcontractors, from tender through to handover.",
  },
  {
    title: "In-house capability",
    text: "Core trades delivered directly by our own teams, giving us tighter control over quality and programme.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="page-hero page-hero--waves">
        <div className="container">
          <span className="eyebrow">About Michael Connolly Contracts</span>
          <h1>Over 25 years of building across Ireland.</h1>
          <p className="page-hero__subtext">
            Michael Connolly Contracts is a family-run building and civil engineering contractor based in Dundalk, Co.
            Louth. We work across the commercial, residential, civil, industrial, and public sectors combining
            direct-labour trades with experienced project management to deliver safely, on time, and on budget.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="section-heading">From groundworks to general contracting</h2>
            <p className="section-subtext">
              What started as a small groundworks outfit has grown into a full-service construction company with an
              in-house team of engineers, carpenters, steel-fixers, and plant operators. We've kept the same hands-on
              approach since day one: the people who tender the job are the same people who deliver it.
            </p>
          </div>
          <ul className="timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h2 className="section-heading">Our specialities</h2>
          <p className="section-subtext">Six core sectors, one in-house delivery team. Here's where we focus.</p>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {specialities.map((item) => (
              <SpecialityCard key={item.id} speciality={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2 className="section-heading">Our values</h2>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

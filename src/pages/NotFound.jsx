import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p className="page-hero__subtext">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

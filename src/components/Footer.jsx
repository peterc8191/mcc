import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__logo">
            MCC <span>Michael Connolly Contracts</span>
          </span>
          <p>
            Commercial, residential, civil, and industrial construction, delivered safely
            and on programme across Ireland.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Contact Us</h4>
          <ul className="site-footer__list">
            <li>
              <span className="site-footer__label">Address</span>
              Jenkinstown, Dundalk, Co. Louth, A91 HN70
            </li>
            <li>
              <span className="site-footer__label">Office</span>
              <a href="tel:+353429371985">042-9371985</a>
            </li>
            <li>
              <span className="site-footer__label">Mobile</span>
              <a href="tel:+353872791740">087-2791740</a>
            </li>
            <li>
              <span className="site-footer__label">Email</span>
              <a href="mailto:info@connollycontracts.ie">info@connollycontracts.ie</a>
            </li>
            <li>
              <span className="site-footer__label">Hours</span>
              Mon&ndash;Fri, 8:00&ndash;17:30
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Navigate</h4>
          <ul className="site-footer__list site-footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Request a Quote</h4>
          <p className="site-footer__cta-text">
            Tell us about your project.
          </p>
          <a href="mailto:info@connollycontracts.ie" className="btn btn-outline">
            Email Our Team
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {year} Michael Connolly Contracts. All rights reserved.</span>
        <span>Registered in Ireland</span>
      </div>
    </footer>
  );
}

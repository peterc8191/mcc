import "./SpecialityCard.css";

export default function SpecialityCard({ speciality }) {
  return (
    <div className="speciality-card">
      <span className="speciality-card__icon">{speciality.icon}</span>
      <h3>{speciality.title}</h3>
      <p>{speciality.description}</p>
    </div>
  );
}

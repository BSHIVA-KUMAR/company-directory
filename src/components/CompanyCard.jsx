import "../styles/companyCard.css";

export default function CompanyCard({ company, onClick }) {
  return (
    <div className="company-card" onClick={onClick}>
      <div className="company-logo-container">
        <img
          src={company.logo}
          alt={company.name}
          className="company-logo"
          onError={(e) => (e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg")}
        />
      </div>
      <div className="company-info">
        <h3 className="company-name">{company.name}</h3>
        <p className="company-location">{company.location}</p>
        <p className="company-industry">{company.industry}</p>
      </div>
    </div>
  );
}

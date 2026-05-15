export default function Certifications({ certifications }) {
  return (
    <div className="cert-list">
      {certifications.map((c, i) => (
        <div className="cert-card" key={i}>
          <div className="cert-icon">{c.icon}</div>
          <div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-org">{c.org}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

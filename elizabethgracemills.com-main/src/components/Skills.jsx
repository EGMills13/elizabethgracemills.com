export default function Skills({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((s, i) => (
        <div className="skill-card" key={i}>
          <div className="skill-label">{s.label}</div>
          <div className="skill-value">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

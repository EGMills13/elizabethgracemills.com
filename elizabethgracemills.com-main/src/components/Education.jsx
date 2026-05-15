export default function Education({ education }) {
  return (
    <div className="edu-list">
      {education.map((e, i) => (
        <div className="edu-card" key={i}>
          <div className="edu-degree">{e.degree}</div>
          <div className="edu-school">{e.school}</div>
        </div>
      ))}
    </div>
  );
}

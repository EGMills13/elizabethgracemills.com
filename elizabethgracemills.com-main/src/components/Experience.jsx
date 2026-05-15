export default function Experience({ experience }) {
  return (
    <>
      {experience.map((emp, ei) => (
        <div className="employer-block" key={ei}>
          <div className="employer-header">
            <span className="employer-name">{emp.employer}</span>
            <span className="employer-location">{emp.location}</span>
          </div>
          {emp.roles.map((role, ri) => (
            <div className="role-block" key={ri}>
              <div className="role-header">
                <span className="role-title">{role.title}</span>
                <span className="role-dates">{role.dates}</span>
              </div>
              <ul className="role-bullets">
                {role.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

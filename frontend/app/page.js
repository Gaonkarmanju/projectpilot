import Link from 'next/link';

const preview = [
  { week: 1, title: 'Abstract, SRS and diagrams', state: 'is-done' },
  { week: 2, title: 'Project setup and database', state: 'is-done' },
  { week: 3, title: 'Build login and dashboard', state: 'is-started' },
  { week: 4, title: 'Build the core feature', state: '' },
  { week: 5, title: 'Testing, report and demo', state: '' },
];

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Plan your final-year project week by week.</h1>
        <p className="lead">
          Pick an idea that fits your skills and deadline. ProjectPilot turns it into a weekly plan with the code,
          documentation and testing your college expects, then tracks every step until submission.
        </p>
        <div className="row">
          <Link href="/ideas" className="btn btn-primary">Find a project idea</Link>
          <Link href="/signup" className="btn btn-quiet">Create a free account</Link>
        </div>
      </div>

      <div className="hero-plan" aria-label="Example project plan">
        <p className="plan-caption">Example plan: Hostel Complaint Tracker, 5 weeks</p>
        <ol className="route route-preview">
          {preview.map((w) => (
            <li key={w.week} className={`waypoint ${w.state}`}>
              <span className="waypoint-dot" aria-hidden="true">{w.week}</span>
              <div className="waypoint-body"><h3>{w.title}</h3></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

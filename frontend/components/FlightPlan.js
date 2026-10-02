'use client';

// The roadmap drawn as a route: one waypoint per week, filled in as tasks get done
export default function FlightPlan({ weeks, milestones, onToggle, busyId }) {
  return (
    <ol className="route">
      {weeks.map((w) => {
        const items = milestones.filter((m) => m.weekNo === Number(w.week));
        const done = items.length > 0 && items.every((m) => m.isDone);
        const started = items.some((m) => m.isDone);
        return (
          <li key={w.week} className={`waypoint ${done ? 'is-done' : started ? 'is-started' : ''}`}>
            <span className="waypoint-dot" aria-hidden="true">{w.week}</span>
            <div className="waypoint-body">
              <h3>Week {w.week}: {w.title}</h3>
              <ul className="tasks">
                {items.map((m) => (
                  <li key={m.id}>
                    <label className={m.isDone ? 'task done' : 'task'}>
                      <input type="checkbox" checked={m.isDone} disabled={busyId === m.id} onChange={() => onToggle(m)} />
                      <span>{m.title}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

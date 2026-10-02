'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { api, STATUS_LABEL } from '@/lib/api';
import RequireAuth from '@/components/RequireAuth';
import FlightPlan from '@/components/FlightPlan';

function Project() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');
  const [generating, setGenerating] = useState(false);
  const [busyId, setBusyId] = useState(null);

  useEffect(() => { api(`/projects/${id}`).then((d) => setProject(d.project)).catch((e) => setError(e.message)); }, [id]);

  async function generate() {
    if (project.roadmap && !confirm('Create a new plan? Your ticked tasks will be cleared.')) return;
    setGenerating(true);
    setError('');
    try {
      const d = await api(`/projects/${id}/roadmap`, { method: 'POST' });
      setProject(d.project);
    } catch (e) { setError(e.message); }
    finally { setGenerating(false); }
  }

  async function toggle(m) {
    setBusyId(m.id);
    try {
      const d = await api(`/projects/${id}/milestones/${m.id}`, { method: 'PATCH', body: { isDone: !m.isDone } });
      setProject(d.project);
    } catch (e) { setError(e.message); }
    finally { setBusyId(null); }
  }

  async function remove() {
    if (!confirm('Delete this project and its plan? This cannot be undone.')) return;
    try {
      await api(`/projects/${id}`, { method: 'DELETE' });
      router.push('/dashboard');
    } catch (e) { setError(e.message); }
  }

  if (error && !project) return <p className="error page-pad">{error}</p>;
  if (!project) return <p className="muted page-pad">Loading…</p>;

  const plan = project.roadmap?.content;

  return (
    <div className="page-pad detail">
      <Link href="/dashboard" className="back">Back to my projects</Link>
      <h1>{project.idea.title}</h1>
      <p className="muted">
        {STATUS_LABEL[project.status]}
        {project.deadline && `, due ${new Date(project.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`}
      </p>

      {error && <p className="error" role="alert">{error}</p>}

      {!plan ? (
        <div className="start-box">
          <h2>Create your weekly plan</h2>
          <p className="muted">
            You will get a week-by-week plan covering design, coding, testing and the project report, fitted to your deadline.
          </p>
          <button className="btn btn-primary" onClick={generate} disabled={generating}>
            {generating ? 'Creating your plan…' : 'Create plan'}
          </button>
        </div>
      ) : (
        <>
          <div className="progress big" aria-label={`${project.progress.percent}% complete`}>
            <div className="progress-bar"><span style={{ width: `${project.progress.percent}%` }} /></div>
            <small>{project.progress.done} of {project.progress.total} tasks done</small>
          </div>

          <p className="lead">{plan.summary}</p>

          {plan.modules?.length > 0 && (
            <>
              <h2>Modules</h2>
              <dl className="modules">
                {plan.modules.map((m) => (
                  <div key={m.name}><dt>{m.name}</dt><dd>{m.description}</dd></div>
                ))}
              </dl>
            </>
          )}

          <h2>Your plan</h2>
          <FlightPlan weeks={plan.weeks} milestones={project.milestones} onToggle={toggle} busyId={busyId} />

          <div className="row danger-zone">
            <button className="btn btn-quiet" onClick={generate} disabled={generating}>
              {generating ? 'Creating…' : 'Create a new plan'}
            </button>
            <button className="btn btn-danger" onClick={remove}>Delete project</button>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectPage() {
  return <RequireAuth><Project /></RequireAuth>;
}

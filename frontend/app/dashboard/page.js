'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api, STATUS_LABEL } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';
import RequireAuth from '@/components/RequireAuth';

function Dashboard() {
  const { user } = useAuth();
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => { api('/projects').then((d) => setProjects(d.projects)).catch((e) => setError(e.message)); }, []);

  return (
    <div className="page-pad">
      <h1>Hi {user.name.split(' ')[0]}, here are your projects</h1>
      {error && <p className="error" role="alert">{error}</p>}
      {projects && projects.length === 0 && (
        <div className="empty">
          <p>You have not started a project yet. Pick an idea to get your weekly plan.</p>
          <Link href="/ideas" className="btn btn-primary">Find a project idea</Link>
        </div>
      )}
      <ul className="project-list">
        {projects?.map((p) => (
          <li key={p.id}>
            <Link href={`/projects/${p.id}`} className="project-row">
              <div>
                <h3>{p.idea.title}</h3>
                <p className="muted">
                  {STATUS_LABEL[p.status]}
                  {p.deadline && `, due ${new Date(p.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                </p>
              </div>
              <div className="progress" aria-label={`${p.progress.percent}% complete`}>
                <div className="progress-bar"><span style={{ width: `${p.progress.percent}%` }} /></div>
                <small>{p.progress.total ? `${p.progress.done} of ${p.progress.total} tasks` : 'No plan yet'}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DashboardPage() {
  return <RequireAuth><Dashboard /></RequireAuth>;
}

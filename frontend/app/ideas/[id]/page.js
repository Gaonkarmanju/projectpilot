'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { api, DIFFICULTY_LABEL } from '@/lib/api';
import { useAuth } from '@/lib/AuthContext';

export default function IdeaDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const [idea, setIdea] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => { api(`/ideas/${id}`).then((d) => setIdea(d.idea)).catch((e) => setError(e.message)); }, [id]);

  async function startProject() {
    if (!user) return router.push(`/login?next=/ideas/${id}`);
    setBusy(true);
    setError('');
    try {
      const { project } = await api('/projects', { method: 'POST', body: { ideaId: id, deadline: deadline || undefined } });
      router.push(`/projects/${project.id}`);
    } catch (e) {
      setError(e.message);
      setBusy(false);
    }
  }

  if (error && !idea) return <p className="error page-pad">{error}</p>;
  if (!idea) return <p className="muted page-pad">Loading…</p>;

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="page-pad detail">
      <Link href="/ideas" className="back">Back to ideas</Link>
      <div className="idea-meta">
        <span className={`level level-${idea.difficulty.toLowerCase()}`}>{DIFFICULTY_LABEL[idea.difficulty]}</span>
        <span>{idea.domain}</span>
        <span>About {idea.estWeeks} weeks</span>
      </div>
      <h1>{idea.title}</h1>
      <p className="lead">{idea.description}</p>

      <h2>What you will build</h2>
      <ul className="plain-list">{idea.features.map((f) => <li key={f}>{f}</li>)}</ul>

      <h2>Suggested tech stack</h2>
      <p>{idea.techStack.join(', ')}</p>

      <div className="start-box">
        <h2>Start this project</h2>
        <p className="muted">Add your submission date and your plan will fit the weeks you have.</p>
        <div className="row">
          <label>Submission date (optional)
            <input type="date" min={today} value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </label>
          <button className="btn btn-primary" onClick={startProject} disabled={busy}>
            {busy ? 'Starting…' : user ? 'Start project' : 'Log in to start'}
          </button>
        </div>
        {error && <p className="error" role="alert">{error}</p>}
      </div>
    </div>
  );
}

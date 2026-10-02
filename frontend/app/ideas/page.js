'use client';
import { useEffect, useRef, useState } from 'react';
import { api } from '@/lib/api';
import IdeaCard from '@/components/IdeaCard';

export default function IdeasPage() {
  const [filters, setFilters] = useState({ domains: [], difficulties: [] });
  const [query, setQuery] = useState({ q: '', domain: '', difficulty: '', maxWeeks: '' });
  const [ideas, setIdeas] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const requestId = useRef(0); // ignore responses from outdated filter changes

  useEffect(() => { api('/ideas/filters').then(setFilters).catch(() => {}); }, []);

  function load(nextPage) {
    const id = ++requestId.current;
    const params = new URLSearchParams(Object.entries(query).filter(([, v]) => v));
    params.set('page', nextPage);
    setLoading(true);
    api(`/ideas?${params}`)
      .then((d) => {
        if (id !== requestId.current) return;
        setIdeas((prev) => (nextPage === 1 ? d.ideas : [...prev, ...d.ideas]));
        setTotal(d.total);
        setPage(nextPage);
        setError('');
      })
      .catch((e) => { if (id === requestId.current) setError(e.message); })
      .finally(() => { if (id === requestId.current) setLoading(false); });
  }

  // Refetch from page 1 when filters change (debounced for the search box)
  useEffect(() => {
    const t = setTimeout(() => load(1), 250);
    return () => clearTimeout(t);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (key) => (e) => setQuery({ ...query, [key]: e.target.value });

  return (
    <div className="page-pad">
      <h1>Find a project idea</h1>
      <p className="lead">Filter by area, difficulty and how many weeks you have.</p>

      <div className="filters">
        <label className="grow">Search<input placeholder="e.g. chatbot, attendance" value={query.q} onChange={set('q')} /></label>
        <label>Area
          <select value={query.domain} onChange={set('domain')}>
            <option value="">All areas</option>
            {filters.domains.map((d) => <option key={d}>{d}</option>)}
          </select>
        </label>
        <label>Difficulty
          <select value={query.difficulty} onChange={set('difficulty')}>
            <option value="">Any</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
          </select>
        </label>
        <label>Time available
          <select value={query.maxWeeks} onChange={set('maxWeeks')}>
            <option value="">Any</option>
            <option value="5">Up to 5 weeks</option>
            <option value="7">Up to 7 weeks</option>
            <option value="9">Up to 9 weeks</option>
          </select>
        </label>
      </div>

      {error && <p className="error" role="alert">{error}</p>}
      {!loading && !error && ideas.length === 0 && (
        <p className="empty">No ideas match these filters. Remove a filter or try a broader search.</p>
      )}
      {ideas.length > 0 && (
        <p className="result-count">Showing {ideas.length} of {total.toLocaleString()} ideas</p>
      )}
      <div className="idea-grid">{ideas.map((i) => <IdeaCard key={i.id} idea={i} />)}</div>
      {ideas.length < total && (
        <div className="load-more">
          <button className="btn btn-quiet" onClick={() => load(page + 1)} disabled={loading}>
            {loading ? 'Loading…' : 'Load more ideas'}
          </button>
        </div>
      )}
    </div>
  );
}

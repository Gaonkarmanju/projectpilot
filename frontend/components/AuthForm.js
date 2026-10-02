'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

export default function AuthForm({ mode }) {
  const isSignup = mode === 'signup';
  const { login, signup } = useAuth();
  const router = useRouter();
  const next = useSearchParams().get('next') || '/dashboard';
  const [form, setForm] = useState({ name: '', email: '', password: '', college: '', year: '', skillLevel: 'BEGINNER' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      if (isSignup) {
        const { name, email, password, college, year, skillLevel } = form;
        await signup({ name, email, password, skillLevel, college: college || undefined, year: year ? Number(year) : undefined });
      } else {
        await login(form.email, form.password);
      }
      router.push(next);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth">
      <h1>{isSignup ? 'Create your account' : 'Log in'}</h1>
      <form onSubmit={handleSubmit} className="form">
        {isSignup && (
          <label>Full name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
        )}
        <label>Email<input type="email" required value={form.email} onChange={set('email')} autoComplete="email" /></label>
        <label>
          Password
          <input type="password" required minLength={isSignup ? 8 : 1} value={form.password} onChange={set('password')}
            autoComplete={isSignup ? 'new-password' : 'current-password'} />
          {isSignup && <small>At least 8 characters</small>}
        </label>
        {isSignup && (
          <>
            <label>College (optional)<input value={form.college} onChange={set('college')} /></label>
            <div className="form-row">
              <label>Year of study
                <select value={form.year} onChange={set('year')}>
                  <option value="">Choose</option>
                  {[1, 2, 3, 4, 5, 6].map((y) => <option key={y} value={y}>Year {y}</option>)}
                </select>
              </label>
              <label>Coding experience
                <select value={form.skillLevel} onChange={set('skillLevel')}>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </label>
            </div>
          </>
        )}
        {error && <p className="error" role="alert">{error}</p>}
        <button className="btn btn-primary" disabled={busy}>{busy ? 'Please wait…' : isSignup ? 'Create account' : 'Log in'}</button>
      </form>
      <p className="muted">
        {isSignup ? <>Already have an account? <Link href="/login">Log in</Link></> : <>New here? <Link href="/signup">Create an account</Link></>}
      </p>
    </div>
  );
}

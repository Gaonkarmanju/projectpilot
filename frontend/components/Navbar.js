'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const active = (href) => (pathname.startsWith(href) ? 'nav-link active' : 'nav-link');

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="ProjectPilot home">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 13l20-9-6 18-4-7-10-2z" fill="currentColor" /></svg>
          ProjectPilot
        </Link>
        <nav className="nav-links">
          <Link href="/ideas" className={active('/ideas')}>Find ideas</Link>
          {user && <Link href="/dashboard" className={active('/dashboard')}>My projects</Link>}
          {user ? (
            <button className="btn btn-quiet" onClick={() => { logout(); router.push('/'); }}>Log out</button>
          ) : (
            <>
              <Link href="/login" className={active('/login')}>Log in</Link>
              <Link href="/signup" className="btn btn-primary">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

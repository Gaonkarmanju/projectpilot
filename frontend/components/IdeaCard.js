import Link from 'next/link';
import { DIFFICULTY_LABEL } from '@/lib/api';

export default function IdeaCard({ idea }) {
  return (
    <Link href={`/ideas/${idea.id}`} className="idea">
      <div className="idea-meta">
        <span className={`level level-${idea.difficulty.toLowerCase()}`}>{DIFFICULTY_LABEL[idea.difficulty]}</span>
        <span>{idea.domain}</span>
        <span>{idea.estWeeks} weeks</span>
      </div>
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <p className="stack">{idea.techStack.join(', ')}</p>
    </Link>
  );
}

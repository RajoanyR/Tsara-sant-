import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, showLink = true }) {
  const Icon = service.icon;
  return (
    <article className="card flex h-full flex-col p-6">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint text-brand">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h3 className="text-base font-bold text-deep">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      {showLink && (
        <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
          En savoir plus <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

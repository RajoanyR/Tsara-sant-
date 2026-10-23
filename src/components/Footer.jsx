import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowUp } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks, hours, contactInfo } from '../data/site.js';

const colTitle = 'mb-3 font-display text-[0.9rem] font-bold tracking-wide text-white';
const linkClass = 'text-[0.85rem] text-white/75 transition-colors hover:text-white';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t-4 border-brand bg-deep text-white/80">
      <div className="container-x grid gap-7 py-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1.2fr] lg:gap-8">
        <div>
          <Link to="/" aria-label="Tsara Santé — accueil"><Logo light /></Link>
          <p className="mt-3 max-w-xs text-[0.85rem] leading-relaxed text-white/70">
            Des informations claires et des services présentés dans un environnement numérique simple et professionnel.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className={colTitle}>Navigation</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={colTitle}>Informations pratiques</h2>
          <ul className="space-y-1.5 text-[0.85rem]">
            <li className="flex items-center gap-2.5"><MapPin size={15} className="shrink-0 text-white/60" aria-hidden="true" />{contactInfo.location}</li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0 text-white/60" aria-hidden="true" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white hover:underline">{contactInfo.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-white/60" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="break-all hover:text-white hover:underline">{contactInfo.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={`${colTitle} flex items-center gap-2`}><Clock size={15} aria-hidden="true" /> Horaires</h2>
          <dl className="space-y-1.5 text-[0.85rem]">
            {hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-3">
                <dt className="text-white/70">{h.label}</dt>
                <dd className={`whitespace-nowrap font-medium ${h.value === 'Fermé' ? 'text-white/55' : 'text-white'}`}>{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex items-center justify-between gap-3 py-3">
          <p className="text-[0.78rem] text-white/60">© 2026 Tsara Santé. Tous droits réservés.</p>
          <button
            type="button"
            onClick={toTop}
            aria-label="Retour en haut de la page"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/25 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
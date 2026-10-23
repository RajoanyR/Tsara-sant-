import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `border-b-2 py-2 text-[13px] font-medium transition-colors ${
      isActive ? 'border-brand text-brand' : 'border-transparent text-deep hover:text-brand'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Tsara Santé — retour à l'accueil">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/rendez-vous" className="btn-primary hidden !px-4 !py-2.5 !text-[13px] sm:inline-flex">
            <CalendarCheck size={16} aria-hidden="true" /> Prendre rendez-vous
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-deep lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-base font-medium ${isActive ? 'bg-mint text-brand' : 'text-deep hover:bg-pale'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/rendez-vous" className="btn-primary w-full">
                <CalendarCheck size={16} aria-hidden="true" /> Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

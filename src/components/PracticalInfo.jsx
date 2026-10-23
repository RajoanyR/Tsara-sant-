import { Clock, MapPin, Phone } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';
import { hours, contactInfo } from '../data/site.js';

export default function PracticalInfo() {
  return (
    <section aria-labelledby="infos-pratiques" className="container-x">
      <div className="rounded-xl border border-line bg-mint/60 p-6 sm:p-8">
        <h2 id="infos-pratiques" className="section-title mb-6">Informations pratiques</h2>
        <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-line">
          <div className="flex gap-4 md:pr-6">
            <Clock className="mt-0.5 shrink-0 text-brand" size={26} aria-hidden="true" />
            <div>
              <h3 className="font-bold">Horaires</h3>
              <dl className="mt-2 space-y-1 text-sm">
                {hours.map((h) => (
                  <div key={h.label} className="flex flex-wrap gap-x-2">
                    <dt className="text-muted">{h.label} :</dt>
                    <dd className="font-medium">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex gap-4 md:px-6">
            <MapPin className="mt-0.5 shrink-0 text-brand" size={26} aria-hidden="true" />
            <div>
              <h3 className="font-bold">Localisation</h3>
              <p className="mt-2 text-sm text-muted">{contactInfo.location}</p>
            </div>
          </div>
          <div className="flex gap-4 md:pl-6">
            <Phone className="mt-0.5 shrink-0 text-brand" size={26} aria-hidden="true" />
            <div>
              <h3 className="font-bold">Contact</h3>
              <p className="mt-2 text-sm text-muted">
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">{contactInfo.phone}</a><br />
                <span className="break-all">{contactInfo.email}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink to="/contact" variant="outline">Voir la page Contact</ButtonLink>
          <ButtonLink to="/rendez-vous">Prendre rendez-vous</ButtonLink>
        </div>
      </div>
    </section>
  );
}

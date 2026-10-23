import { CalendarCheck } from 'lucide-react';
import useDocumentMeta from '../utils/useDocumentMeta.js';
import ServiceCard from '../components/ServiceCard.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { services } from '../data/site.js';

export default function Services() {
  useDocumentMeta('Nos services — Tsara Santé', 'Médecine générale, pédiatrie, soins infirmiers, prévention et suivi : découvrez les services de Tsara Santé.');

  return (
    <>
      <section className="bg-pale py-12">
        <div className="container-x">
          <h1 className="page-title">Nos services</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">Découvrez nos principales catégories de services de santé.</p>
        </div>
      </section>

      <section className="container-x py-12" aria-label="Liste des services">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (<ServiceCard key={s.id} service={s} showLink={false} />))}
        </div>
      </section>

      <section className="container-x pb-14" aria-labelledby="titre-rdv-services">
        <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-line bg-mint/60 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <CalendarCheck className="mt-1 shrink-0 text-brand" size={32} aria-hidden="true" />
            <div>
              <h2 id="titre-rdv-services" className="text-lg font-bold">Vous souhaitez prendre rendez-vous ?</h2>
              <p className="mt-1 text-sm text-muted">Consultez nos informations pratiques ou utilisez le formulaire de rendez-vous.</p>
            </div>
          </div>
          <ButtonLink to="/rendez-vous" className="shrink-0">Accéder au formulaire</ButtonLink>
        </div>
      </section>
    </>
  );
}

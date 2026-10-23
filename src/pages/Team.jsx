import useDocumentMeta from '../utils/useDocumentMeta.js';
import TeamCard from '../components/TeamCard.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { team } from '../data/site.js';

export default function Team() {
  useDocumentMeta('Notre équipe — Tsara Santé', 'Découvrez les domaines de compétence de l’équipe Tsara Santé : médecine générale, pédiatrie et soins infirmiers.');

  return (
    <>
      <section className="bg-pale py-12">
        <div className="container-x">
          <h1 className="page-title">Notre équipe</h1>
          <p className="mt-3 max-w-3xl text-[15px] text-muted">Des professionnels à votre écoute.</p>
        </div>
      </section>

      <section className="container-x py-12" aria-label="Fonctions de l'équipe">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (<TeamCard key={m.id} member={m} large />))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/services">Découvrir nos services</ButtonLink>
        </div>
      </section>
    </>
  );
}

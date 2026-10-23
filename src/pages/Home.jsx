import useDocumentMeta from '../utils/useDocumentMeta.js';
import ButtonLink from '../components/ButtonLink.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import PracticalInfo from '../components/PracticalInfo.jsx';
import Photo from '../components/Photo.jsx';
import { services, team, steps } from '../data/site.js';

export default function Home() {
  useDocumentMeta('Tsara Santé — Votre santé, notre priorité', 'Tsara Santé, centre de santé à Antananarivo : découvrez nos services, notre équipe et les informations pratiques pour préparer votre visite.');

  return (
    <>
      <section className="overflow-hidden bg-pale" aria-labelledby="titre-accueil">
        <div className="container-x grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-0">
          <div className="max-w-xl lg:py-20">
            <p className="eyebrow">BIENVENUE CHEZ TSARA SANTÉ</p>
            <h1 id="titre-accueil" className="hero-title mt-4">
              Votre santé mérite toute notre attention.
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Découvrez nos services de santé et les informations utiles pour préparer votre visite. Tsara Santé met
              l'accent sur un accueil attentif, une information claire et une expérience simple.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/services">Découvrir nos services</ButtonLink>
              <ButtonLink to="/rendez-vous" variant="outline">Demander un rendez-vous</ButtonLink>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[400px] lg:h-[440px]">
            <Photo name="hero" kind="hero" eager alt="Médecin en consultation avec une patiente dans un cabinet lumineux" className="relative h-full w-full rounded-lg lg:rounded-none" />
          </div>
        </div>
      </section>

      <section className="container-x py-14" aria-labelledby="titre-services">
        <h2 id="titre-services" className="section-title">Nos services</h2>
        <p className="mt-1.5 text-sm text-muted">Des services adaptés à vos besoins pour vous accompagner au quotidien.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (<ServiceCard key={s.id} service={s} />))}
        </div>
      </section>

      <section className="bg-mint/60 py-12" aria-labelledby="titre-apropos">
        <div className="container-x grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-deep">À propos de Tsara Santé</p>
            <h2 id="titre-apropos" className="section-title mt-2">Un espace pensé pour vous informer</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              Tsara Santé propose une présentation claire de ses services et des informations pratiques pour accompagner
              les visiteurs dans leurs démarches de santé.
            </p>
            <ButtonLink to="/a-propos" className="mt-6">En savoir plus</ButtonLink>
          </div>
          <Photo name="accueil" kind="reception" alt="Réception moderne et lumineuse d'un centre de santé" className="aspect-[16/8] w-full rounded-lg" />
        </div>
      </section>

      <section className="container-x grid gap-12 py-14 lg:grid-cols-2" aria-label="Équipe et préparation de la visite">
        <div>
          <h2 className="section-title">Notre équipe</h2>
          <p className="mt-1.5 text-sm text-muted">Des professionnels à votre écoute</p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            {team.map((m) => (<TeamCard key={m.id} member={m} />))}
          </div>
          <ButtonLink to="/equipe" className="mt-6">Découvrir notre équipe</ButtonLink>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-12">
          <h2 className="section-title">Comment préparer votre visite ?</h2>
          <p className="mt-1.5 text-sm text-muted">3 étapes simples pour bien préparer votre venue.</p>
          <ol className="mt-6 space-y-5">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-bold text-brand"><span className="sr-only">Étape {i + 1} — </span>{s.title}</h3>
                  <p className="text-sm text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pb-14"><PracticalInfo /></div>
    </>
  );
}

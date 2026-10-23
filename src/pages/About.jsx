import { Target, Eye, Sprout } from 'lucide-react';
import useDocumentMeta from '../utils/useDocumentMeta.js';
import Photo from '../components/Photo.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { values } from '../data/site.js';

export default function About() {
  useDocumentMeta('À propos — Tsara Santé', 'Découvrez Tsara Santé : notre mission, notre vision et nos valeurs.');

  return (
    <>
      <section className="relative isolate overflow-hidden" aria-labelledby="titre-apropos">
        <Photo name="aboutBanner" kind="reception" alt="Environnement médical moderne et lumineux" className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-white/70" aria-hidden="true" />
        <div className="container-x py-14 sm:py-20">
          <div className="border-l-2 border-deep/60 pl-6 sm:pl-10">
            <h1 id="titre-apropos" className="page-title">À propos de Tsara Santé</h1>
            <p className="mt-3 text-[15px] text-deep/80">Un concept de santé moderne, pensé pour vous.</p>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-12 md:grid-cols-[0.8fr_1.4fr]" aria-labelledby="titre-concept">
        <Photo name="aboutConcept" kind="room" alt="Salle de consultation moderne et lumineuse" className="aspect-[4/5] w-full rounded-lg md:aspect-auto md:min-h-[420px]" />

        <div>
          <h2 id="titre-concept" className="text-xl font-bold leading-snug sm:text-2xl">Tsara Santé, un espace pensé pour vous</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Tsara Santé met l'accent sur une présentation claire des services de santé et des informations utiles aux
            visiteurs. Notre objectif est de proposer une expérience numérique simple, accessible et agréable.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Target size={20} aria-hidden="true" /></span>
              <div>
                <h2 className="font-bold">Notre mission</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">Proposer une présentation claire des services et des informations pratiques afin de faciliter l'accès aux informations essentielles.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Eye size={20} aria-hidden="true" /></span>
              <div>
                <h2 className="font-bold">Notre vision</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">Imaginer une expérience numérique simple et accessible permettant à chacun de trouver rapidement les informations dont il a besoin.</p>
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-lg font-bold">Nos valeurs</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="card bg-pale p-4">
                  <Icon className="mb-3 text-brand" size={24} aria-hidden="true" />
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
                </article>
              );
            })}
          </div>
          <ButtonLink to="/services" className="mt-8">Découvrir nos services</ButtonLink>
        </div>
      </section>

      <section className="bg-mint/60" aria-labelledby="titre-question">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Sprout className="shrink-0 text-brand" size={36} aria-hidden="true" />
            <div>
              <h2 id="titre-question" className="text-lg font-bold">Une question ?</h2>
              <p className="text-sm text-muted">Explorez nos services ou contactez-nous pour obtenir plus d'informations.</p>
            </div>
          </div>
          <ButtonLink to="/services" className="shrink-0">Découvrir nos services</ButtonLink>
        </div>
      </section>
    </>
  );
}

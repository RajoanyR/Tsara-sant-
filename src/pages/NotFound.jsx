import useDocumentMeta from '../utils/useDocumentMeta.js';
import ButtonLink from '../components/ButtonLink.jsx';

export default function NotFound() {
  useDocumentMeta('Page introuvable — Tsara Santé', "Cette page n'existe pas sur le site Tsara Santé.");
  return (
    <section className="container-x flex flex-col items-center py-24 text-center">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page introuvable</h1>
      <p className="mt-2 max-w-md text-sm text-muted">La page demandée n'existe pas ou a été déplacée. Retournez à l'accueil pour poursuivre votre visite.</p>
      <ButtonLink to="/" arrow className="mt-6">Retour à l'accueil</ButtonLink>
    </section>
  );
}

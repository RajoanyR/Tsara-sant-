import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import useDocumentMeta from '../utils/useDocumentMeta.js';
import Photo from '../components/Photo.jsx';
import { galleryItems, galleryCategories } from '../data/site.js';

function Modal({ items, index, onClose, onChange }) {
  const ref = useRef(null);
  const item = items[index];

  useEffect(() => {
    const previous = document.activeElement;
    ref.current?.querySelector('button')?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onChange(-1);
    if (e.key === 'ArrowRight') onChange(1);
    if (e.key === 'Tab') {
      const f = ref.current.querySelectorAll('button');
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep/80 p-4"
      onClick={onClose}
      onKeyDown={onKeyDown}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${index + 1} sur ${items.length} : ${item.category}`}
        className="relative w-full max-w-3xl rounded-lg bg-white p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Fermer l'image" className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-deep shadow-soft">
          <X size={20} aria-hidden="true" />
        </button>
        <Photo name={item.image} kind={item.kind} tone={item.tone} alt={item.alt} className="aspect-[4/3] w-full rounded-md" />
        <div className="flex items-center justify-between px-1 pb-1 pt-3">
          <p className="text-sm font-medium text-deep">{item.category}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => onChange(-1)} aria-label="Image précédente" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line"><ChevronLeft size={20} aria-hidden="true" /></button>
            <button type="button" onClick={() => onChange(1)} aria-label="Image suivante" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line"><ChevronRight size={20} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  useDocumentMeta('Galerie — Tsara Santé', "Découvrez l'environnement de Tsara Santé : accueil, consultation, soins et espaces d'attente.");
  const [category, setCategory] = useState('Tout');
  const [openIndex, setOpenIndex] = useState(null);

  const items = category === 'Tout' ? galleryItems : galleryItems.filter((i) => i.category === category);
  const change = (d) => setOpenIndex((i) => (i + d + items.length) % items.length);

  return (
    <>
      <section className="bg-pale py-12">
        <div className="container-x">
          <h1 className="page-title">Découvrez notre univers</h1>
          <p className="mt-3 max-w-2xl text-[15px] text-muted">
            Un environnement pensé pour accueillir les visiteurs dans un cadre agréable et professionnel.
          </p>
        </div>
      </section>

      <section className="container-x py-10" aria-label="Galerie photographique">
        <div role="group" aria-label="Filtrer par catégorie" className="mb-6 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => { setCategory(c); setOpenIndex(null); }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                category === c ? 'border-brand bg-brand text-white' : 'border-line bg-white text-deep hover:bg-mint'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Agrandir l'image : ${item.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-line"
              >
                <Photo name={item.image} kind={item.kind} tone={item.tone} alt={item.alt} className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-deep/0 opacity-0 transition group-hover:bg-deep/30 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ZoomIn className="text-white" size={28} aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {openIndex !== null && <Modal items={items} index={openIndex} onClose={() => setOpenIndex(null)} onChange={change} />}
    </>
  );
}

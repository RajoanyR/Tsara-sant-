import { useState } from 'react';
import { images } from '../data/images.js';
import Illustration from './Illustration.jsx';

// Affiche la photo si elle existe, sinon une illustration de remplacement (jamais d'image cassée).
// Une entrée de images.js peut être une liste de chemins : le suivant est essayé en cas d'échec.
export default function Photo({ name, alt, kind, tone = 0, className = '', eager = false }) {
  const [attempt, setAttempt] = useState(0);
  const sources = [].concat(images[name] || []);
  const src = sources[attempt];

  if (!src) {
    return (
      <div role="img" aria-label={alt} className={`overflow-hidden ${className}`}>
        <Illustration kind={kind || name} tone={tone} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : 'auto'}
      decoding="async"
      onError={() => setAttempt((a) => a + 1)}
      className={`object-cover ${className}`}
    />
  );
}
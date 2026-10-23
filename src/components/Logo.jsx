export function LogoMark({ light = false, size = 40 }) {
  const bg = light ? '#FFFFFF' : '#167D68';
  const fg = light ? '#19352F' : '#FFFFFF';
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M32 56C10 41 7 26 14 18c6-6 14-4 18 3 4-7 12-9 18-3 7 8 4 23-18 38z" fill={bg} />
      <path d="M32 27v16M24 35h16" stroke={fg} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark light={light} />
      <span className="leading-tight">
        <span className={`block font-display text-[1.2rem] font-extrabold tracking-tight ${light ? 'text-white' : 'text-deep'}`}>Tsara Santé</span>
        <span className={`block text-[11px] ${light ? 'text-white/70' : 'text-muted'}`}>Votre santé, notre priorité.</span>
      </span>
    </span>
  );
}

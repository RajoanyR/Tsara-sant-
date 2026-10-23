const TONES = [
  { skin: '#8d5a3b', hair: '#2b1d16', scrub: '#2aa58c' },
  { skin: '#c58c6b', hair: '#3a2a20', scrub: '#3aa0b8' },
  { skin: '#6e4630', hair: '#15100d', scrub: '#1e7fd0' },
];

function Plant({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-14" y="0" width="28" height="30" rx="4" fill="#e9eeec" />
      <ellipse cx="-14" cy="-14" rx="9" ry="22" fill="#3f9b6c" transform="rotate(-25 -14 -14)" />
      <ellipse cx="0" cy="-20" rx="9" ry="26" fill="#2f8a5c" />
      <ellipse cx="14" cy="-12" rx="9" ry="22" fill="#4aa876" transform="rotate(25 14 -12)" />
    </g>
  );
}

function Windows() {
  return (
    <g fill="#ffffff" opacity="0.75">
      {[20, 120, 220].map((x) => (<rect key={x} x={x} y="20" width="80" height="150" rx="3" />))}
    </g>
  );
}

function Person({ x, y, s = 1, skin, hair, scrub, coat = '#ffffff', longHair = true }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {longHair && <ellipse cx="0" cy="44" rx="52" ry="66" fill={hair} />}
      <path d="M-120 280 C-120 160 -75 118 0 118 C75 118 120 160 120 280 Z" fill={coat} />
      <path d="M-30 118 L0 200 L30 118 Z" fill={scrub} />
      <rect x="-15" y="72" width="30" height="50" rx="12" fill={skin} />
      <ellipse cx="0" cy="36" rx="42" ry="50" fill={skin} />
      <path d="M-48 28 C-54 -40 54 -40 48 28 C42 -4 -42 -4 -48 28Z" fill={hair} />
      <circle cx="-15" cy="38" r="3.2" fill="#2a1a12" />
      <circle cx="15" cy="38" r="3.2" fill="#2a1a12" />
      <path d="M-14 62 Q0 74 14 62" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M-36 120 C-44 200 -10 228 0 210 C10 228 44 200 36 120" fill="none" stroke="#2f3b46" strokeWidth="5" />
    </g>
  );
}

export default function Illustration({ kind = 'room', tone = 0 }) {
  const t = TONES[tone % TONES.length];
  const bgId = `bg-${kind}-${tone}`;
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5FAF7" />
          <stop offset="1" stopColor="#D7ECE3" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${bgId})`} />

      {kind === 'hero' && (<>
        <Windows />
        <Plant x="40" y="200" s={1.2} />
        <Person x="290" y="40" s={1} {...t} />
      </>)}

      {(kind === 'portrait' || kind === 'team') && (<>
        <rect x="0" y="0" width="400" height="300" fill="#E6F2EC" />
        <rect x="260" y="20" width="110" height="130" rx="3" fill="#ffffff" opacity="0.7" />
        <Person x="200" y="30" s={0.95} {...t} longHair={tone !== 2} />
      </>)}

      {kind === 'consult' && (<>
        <Windows />
        <Person x="130" y="60" s={0.8} {...t} />
        <Person x="300" y="95" s={0.7} skin="#d9a98c" hair="#4a3426" scrub="#e8b7b0" coat="#f3dcd6" />
      </>)}

      {kind === 'reception' && (<>
        <rect x="0" y="0" width="400" height="190" fill="#EEF7F2" />
        <Windows />
        <g transform="translate(200 70)">
          <path d="M0 24C-22 8-24-8-16-14c6-5 12-3 16 3 4-6 10-8 16-3 8 6 6 22-16 38z" fill="#167D68" />
          <text x="26" y="12" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#19352F">Tsara Santé</text>
        </g>
        <rect x="40" y="190" width="320" height="110" fill="#ffffff" />
        <rect x="40" y="190" width="320" height="14" fill="#cfe8de" />
        <rect x="40" y="204" width="320" height="96" fill="#167D68" opacity="0.85" />
        <Plant x="20" y="230" s={1.3} />
        <Plant x="380" y="230" s={1.3} />
      </>)}

      {kind === 'room' && (<>
        <rect x="0" y="210" width="400" height="90" fill="#dcebe5" />
        <rect x="250" y="20" width="120" height="150" rx="3" fill="#ffffff" opacity="0.8" />
        <rect x="70" y="140" width="190" height="40" rx="8" fill="#ffffff" />
        <rect x="70" y="128" width="60" height="18" rx="8" fill="#3aa0b8" />
        <rect x="80" y="180" width="8" height="60" fill="#9fb4ad" />
        <rect x="240" y="180" width="8" height="60" fill="#9fb4ad" />
        <Plant x="330" y="230" s={1.3} />
      </>)}

      {kind === 'waiting' && (<>
        <Windows />
        <rect x="0" y="220" width="400" height="80" fill="#dcebe5" />
        {[40, 150, 260].map((x) => (
          <g key={x}>
            <rect x={x} y="160" width="90" height="34" rx="12" fill="#3aa0b8" />
            <rect x={x} y="130" width="90" height="40" rx="12" fill="#2f8fa8" />
            <rect x={x + 8} y="194" width="6" height="30" fill="#8aa09a" />
            <rect x={x + 76} y="194" width="6" height="30" fill="#8aa09a" />
          </g>
        ))}
        <Plant x="370" y="215" s={1.2} />
      </>)}

      {kind === 'stethoscope' && (<>
        <rect width="400" height="300" fill="#F1F5F3" />
        <path d="M110 80 C110 190 190 220 250 190 C300 165 320 200 305 235" fill="none" stroke="#2f3b46" strokeWidth="7" strokeLinecap="round" />
        <circle cx="300" cy="245" r="22" fill="#cfd8d6" stroke="#2f3b46" strokeWidth="6" />
        <circle cx="110" cy="72" r="8" fill="#2f3b46" />
      </>)}
    </svg>
  );
}

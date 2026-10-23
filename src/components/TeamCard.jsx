import Photo from './Photo.jsx';

export default function TeamCard({ member, large = false }) {
  return (
    <article className="card overflow-hidden">
      <Photo
        name={member.image}
        kind="portrait"
        tone={member.tone}
        alt={`Professionnel de santé — ${member.role}`}
        className={`w-full ${large ? 'aspect-[4/3.2]' : 'aspect-[4/3.4]'}`}
      />
      <div className="p-4">
        <h3 className="text-base font-bold text-brand">{member.role}</h3>
      </div>
    </article>
  );
}

import ButtonLink from './ButtonLink.jsx';

export default function CtaBand({ title, text, to, label }) {
  return (
    <section className="container-x" aria-label={title}>
      <div className="flex flex-col items-start justify-between gap-5 rounded-xl bg-brand px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
          <p className="mt-1.5 max-w-xl text-sm text-white/85">{text}</p>
        </div>
        <ButtonLink to={to} variant="light" arrow className="shrink-0">{label}</ButtonLink>
      </div>
    </section>
  );
}

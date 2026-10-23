import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Loader2 } from 'lucide-react';
import useDocumentMeta from '../utils/useDocumentMeta.js';
import { Field, fieldProps } from '../components/Field.jsx';
import Notice from '../components/Notice.jsx';
import { validateContact } from '../utils/validation.js';
import { sendContact } from '../utils/email.js';
import { contactInfo, hours } from '../data/site.js';

const EMPTY = { nom: '', email: '', objet: '', message: '' };

export default function Contact() {
  useDocumentMeta('Contact — Tsara Santé', 'Contactez Tsara Santé à Antananarivo : coordonnées, horaires et formulaire de contact.');
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      await sendContact(values);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const reset = () => { setValues(EMPTY); setErrors({}); setStatus('idle'); };
  const sending = status === 'sending';

  return (
    <>
      <section className="bg-pale py-12">
        <div className="container-x">
          <h1 className="page-title">Contactez-nous</h1>
          <p className="mt-3 max-w-3xl text-[15px] text-muted">Nous sommes à votre disposition pour répondre à vos questions.</p>
        </div>
      </section>

      <section className="container-x grid gap-8 py-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold">Nos coordonnées</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-brand" size={20} aria-hidden="true" /><span><strong className="block">Tsara Santé</strong>{contactInfo.location}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-brand" size={20} aria-hidden="true" /><a href={`tel:${contactInfo.phone}`} className="hover:underline">{contactInfo.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 shrink-0 text-brand" size={20} aria-hidden="true" /><span className="break-all">{contactInfo.email}</span></li>
          </ul>
          <h3 className="mt-7 flex items-center gap-2 font-bold"><Clock className="text-brand" size={20} aria-hidden="true" /> Horaires</h3>
          <dl className="mt-3 space-y-1.5 text-sm">
            {hours.map((h) => (
              <div key={h.label} className="flex flex-wrap gap-x-2"><dt className="text-muted">{h.label} :</dt><dd className="font-medium">{h.value}</dd></div>
            ))}
          </dl>
        </div>

        <div className="card p-6 sm:p-8">
          {status === 'success' ? (
            <div className="space-y-5 py-4 text-center">
              <Notice>Votre message a bien été envoyé.</Notice>
              <button type="button" onClick={reset} className="btn-outline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <p className="text-xs text-muted">Tous les champs sont obligatoires (*).</p>
              <Field id="nom" label="Nom" required error={errors.nom}>
                <input type="text" autoComplete="name" className="input" placeholder="Votre nom" value={values.nom} onChange={onChange} {...fieldProps('nom', errors)} />
              </Field>
              <Field id="email" label="E-mail" required error={errors.email}>
                <input type="email" autoComplete="email" className="input" placeholder="nom@exemple.com" value={values.email} onChange={onChange} {...fieldProps('email', errors)} />
              </Field>
              <Field id="objet" label="Objet" required error={errors.objet}>
                <input type="text" className="input" placeholder="Objet de votre message" value={values.objet} onChange={onChange} {...fieldProps('objet', errors)} />
              </Field>
              <Field id="message" label="Message" required error={errors.message}>
                <textarea rows={5} className="input" placeholder="Votre message" value={values.message} onChange={onChange} {...fieldProps('message', errors)} />
              </Field>
              {status === 'error' && <Notice type="error">Une erreur est survenue lors de l'envoi. Veuillez réessayer.</Notice>}
              <button type="submit" disabled={sending} aria-busy={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {sending && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                {sending ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import useDocumentMeta from '../utils/useDocumentMeta.js';
import { Field, fieldProps } from '../components/Field.jsx';
import Notice from '../components/Notice.jsx';
import { validateAppointment, todayISO } from '../utils/validation.js';
import { sendAppointment } from '../utils/email.js';
import { services, appointmentSlots } from '../data/site.js';

const EMPTY = { nom: '', email: '', telephone: '', service: '', date: '', heure: '', message: '' };

export default function Appointment() {
  useDocumentMeta('Prendre rendez-vous — Tsara Santé', 'Remplissez le formulaire pour effectuer votre demande de rendez-vous auprès de Tsara Santé.');
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    const { name } = e.target;
    // Téléphone : on ne garde que les chiffres, les espaces et le « + »
    const value = name === 'telephone' ? e.target.value.replace(/[^\d+\s]/g, '') : e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validateAppointment(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      await sendAppointment(values);
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
          <h1 className="page-title">Demander un rendez-vous</h1>
          <p className="mt-3 max-w-3xl text-[15px] text-muted">Remplissez le formulaire ci-dessous pour effectuer votre demande.</p>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="card mx-auto max-w-3xl p-6 sm:p-8">
          {status === 'success' ? (
            <div className="space-y-5 text-center">
              <Notice>Votre demande de rendez-vous a bien été enregistrée.</Notice>
              <button type="button" onClick={reset} className="btn-outline">Faire une nouvelle demande</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <p className="text-xs text-muted sm:col-span-2">Les champs marqués d'un astérisque (*) sont obligatoires.</p>

              <Field id="nom" label="Nom et prénom" required error={errors.nom}>
                <input type="text" autoComplete="name" className="input" placeholder="Votre nom et prénom" value={values.nom} onChange={onChange} {...fieldProps('nom', errors)} />
              </Field>
              <Field id="email" label="Adresse e-mail" required error={errors.email}>
                <input type="email" autoComplete="email" className="input" placeholder="nom@exemple.com" value={values.email} onChange={onChange} {...fieldProps('email', errors)} />
              </Field>
              <Field id="telephone" label="Téléphone" required error={errors.telephone}>
                <input type="tel" inputMode="tel" maxLength={20} autoComplete="tel" className="input" placeholder="Votre numéro de téléphone" value={values.telephone} onChange={onChange} {...fieldProps('telephone', errors)} />
              </Field>
              <Field id="service" label="Service" error={errors.service}>
                <select className="input" value={values.service} onChange={onChange} {...fieldProps('service', errors)}>
                  <option value="">Sélectionnez un service</option>
                  {services.map((s) => (<option key={s.id} value={s.title}>{s.title}</option>))}
                </select>
              </Field>
              <Field id="date" label="Date souhaitée" error={errors.date}>
                <input type="date" min={todayISO()} className="input" value={values.date} onChange={onChange} {...fieldProps('date', errors)} />
              </Field>
              <Field id="heure" label="Heure souhaitée" error={errors.heure}>
                <select className="input" value={values.heure} onChange={onChange} {...fieldProps('heure', errors)}>
                  <option value="">Sélectionnez une heure</option>
                  {appointmentSlots.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id="message" label="Message" optional error={errors.message}>
                  <textarea rows={4} className="input" placeholder="Votre message" value={values.message} onChange={onChange} {...fieldProps('message', errors)} />
                </Field>
              </div>

              {status === 'error' && (
                <div className="sm:col-span-2">
                  <Notice type="error">Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.</Notice>
                </div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" disabled={sending} aria-busy={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                  {sending && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                  {sending ? 'Envoi en cours…' : 'Valider la demande'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
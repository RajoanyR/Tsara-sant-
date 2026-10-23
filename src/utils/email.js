import emailjs from '@emailjs/browser';

// Seule la clé PUBLIQUE EmailJS est utilisée côté navigateur. Le destinataire
// (tsarasanté02@gmail.com) se règle dans le champ « To email » du modèle EmailJS.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const RECIPIENT = 'tsarasanté02@gmail.com';

const sentAt = () => new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' });
const orDash = (v) => (v && String(v).trim() ? String(v).trim() : 'Non précisé');

function send(templateId, params) {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    return Promise.reject(new Error('Configuration EmailJS incomplète (.env)'));
  }
  return emailjs.send(SERVICE_ID, templateId, params, { publicKey: PUBLIC_KEY });
}

export function sendAppointment(v) {
  const date_envoi = sentAt();
  const content = [
    'Nouvelle demande de rendez-vous',
    '',
    `Nom et prénom : ${v.nom.trim()}`,
    `E-mail : ${v.email.trim()}`,
    `Téléphone : ${v.telephone.trim()}`,
    `Service demandé : ${orDash(v.service)}`,
    `Date souhaitée : ${orDash(v.date)}`,
    `Heure souhaitée : ${orDash(v.heure)}`,
    '',
    'Message :',
    orDash(v.message),
    '',
    `Date de la demande : ${date_envoi}`,
  ].join('\n');

  return send(TEMPLATE_ID, {
    subject: 'Nouvelle demande de rendez-vous — Tsara Santé',
    content,
    to_email: RECIPIENT,
    reply_to: v.email.trim(),
    nom: v.nom.trim(),
    email: v.email.trim(),
    telephone: v.telephone.trim(),
    service: orDash(v.service),
    date: orDash(v.date),
    heure: orDash(v.heure),
    message: orDash(v.message),
    date_envoi,
  });
}

export function sendContact(v) {
  const date_envoi = sentAt();
  const content = [
    `Nom : ${v.nom.trim()}`,
    `E-mail : ${v.email.trim()}`,
    `Objet : ${v.objet.trim()}`,
    '',
    'Message :',
    v.message.trim(),
    '',
    `Date : ${date_envoi}`,
  ].join('\n');

  return send(CONTACT_TEMPLATE_ID, {
    subject: 'Nouveau message — Tsara Santé',
    content,
    to_email: RECIPIENT,
    reply_to: v.email.trim(),
    nom: v.nom.trim(),
    email: v.email.trim(),
    objet: v.objet.trim(),
    message: v.message.trim(),
    date_envoi,
  });
}

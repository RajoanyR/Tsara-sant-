const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?\d[\d\s]{6,18}\d$/;

export function todayISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function checkEmail(value, errors) {
  if (!value.trim()) errors.email = 'Veuillez saisir votre adresse e-mail.';
  else if (!EMAIL_RE.test(value.trim())) errors.email = "Le format de l'adresse e-mail n'est pas valide (exemple : nom@domaine.com).";
}

export function validateAppointment(v) {
  const errors = {};
  if (!v.nom.trim()) errors.nom = 'Veuillez indiquer votre nom et prénom.';
  else if (v.nom.trim().length < 3) errors.nom = 'Le nom saisi semble trop court.';
  checkEmail(v.email, errors);
  if (!v.telephone.trim()) errors.telephone = 'Veuillez indiquer votre numéro de téléphone.';
  else if (!PHONE_RE.test(v.telephone.trim())) errors.telephone = 'Veuillez saisir un numéro valide (chiffres uniquement, 8 chiffres minimum).';
  if (v.date && v.date < todayISO()) errors.date = 'La date choisie est passée. Veuillez sélectionner une date à venir.';
  return errors;
}

export function validateContact(v) {
  const errors = {};
  if (!v.nom.trim()) errors.nom = 'Veuillez indiquer votre nom.';
  checkEmail(v.email, errors);
  if (!v.objet.trim()) errors.objet = "Veuillez préciser l'objet de votre message.";
  if (!v.message.trim()) errors.message = 'Veuillez écrire votre message.';
  else if (v.message.trim().length < 10) errors.message = 'Votre message est trop court (10 caractères minimum).';
  return errors;
}
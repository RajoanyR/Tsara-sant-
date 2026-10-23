import { Stethoscope, Baby, HeartPulse, ShieldCheck, Users, Handshake, Lightbulb } from 'lucide-react';

export const siteName = 'Tsara Santé';
export const slogan = 'Votre santé, notre priorité.';
export const contactInfo = {
  location: 'Antananarivo, Madagascar',
  phone: '0329926634',
  email: 'tsarasanté02@gmail.com',
};

export const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Notre équipe' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
];

export const hours = [
  { label: 'Lundi – Vendredi', value: '08 h 00 – 17 h 00' },
  { label: 'Samedi', value: '08 h 00 – 12 h 00' },
  { label: 'Dimanche', value: 'Fermé' },
];

export const services = [
  { id: 'medecine-generale', title: 'Médecine générale', icon: Stethoscope, short: 'Consultations médicales courantes et suivi de santé.' },
  { id: 'pediatrie', title: 'Pédiatrie', icon: Baby, short: 'Suivi de santé des enfants et consultations pédiatriques.' },
  { id: 'soins-infirmiers', title: 'Soins infirmiers', icon: HeartPulse, short: 'Soins infirmiers et accompagnement au quotidien.' },
  { id: 'prevention-suivi', title: 'Prévention et suivi', icon: ShieldCheck, short: 'Informations et accompagnement pour la prévention et le suivi de santé.' },
];

export const team = [
  { id: 'medecine-generale', role: 'Médecine générale', image: 'team1', tone: 0 },
  { id: 'pediatrie', role: 'Pédiatrie', image: 'team2', tone: 1 },
  { id: 'soins-infirmiers', role: 'Soins infirmiers', image: 'team3', tone: 2 },
];

export const steps = [
  { title: 'Découvrez les services', text: 'Consultez la liste de nos services.' },
  { title: 'Consultez les informations pratiques', text: 'Vérifiez les horaires et les informations disponibles.' },
  { title: 'Préparez votre demande de rendez-vous', text: 'Indiquez vos informations et vos préférences.' },
];

export const values = [
  { title: 'Écoute', icon: Users, text: "Accorder de l'importance aux besoins et aux attentes de chaque visiteur." },
  { title: 'Respect', icon: Handshake, text: 'Privilégier un accueil respectueux et une communication attentive.' },
  { title: 'Clarté', icon: Lightbulb, text: 'Organiser les informations de manière simple et compréhensible.' },
];

export const galleryCategories = ['Tout', 'Accueil', 'Consultation', 'Soins', "Salle d'attente"];

export const galleryItems = [
  { id: 1, category: 'Accueil', image: 'gallery1', kind: 'reception', tone: 0, alt: "Réception moderne d'un centre de santé" },
  { id: 2, category: 'Consultation', image: 'gallery2', kind: 'consult', tone: 0, alt: 'Échange entre une professionnelle de santé et une patiente' },
  { id: 3, category: 'Consultation', image: 'gallery3', kind: 'consult', tone: 1, alt: 'Médecin remplissant un dossier lors d’une consultation' },
  { id: 4, category: 'Soins', image: 'gallery4', kind: 'stethoscope', tone: 0, alt: 'Stéthoscope posé sur un fond bleu clair' },
  { id: 5, category: 'Accueil', image: 'gallery5', kind: 'reception', tone: 1, alt: 'Membre du personnel souriant au comptoir d’accueil' },
  { id: 6, category: 'Consultation', image: 'gallery6', kind: 'portrait', tone: 1, alt: 'Professionnelle de santé dans une salle de consultation lumineuse' },
  { id: 7, category: 'Soins', image: 'gallery7', kind: 'portrait', tone: 2, alt: 'Médecin et patiente dans une chambre de soins' },
  { id: 8, category: "Salle d'attente", image: 'gallery8', kind: 'waiting', tone: 0, alt: "Couloir lumineux avec bancs d'attente" },
];

export const appointmentSlots = ['08 h 00', '09 h 00', '10 h 00', '11 h 00', '14 h 00', '15 h 00', '16 h 00'];

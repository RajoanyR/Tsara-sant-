# Tsara Santé — site vitrine (React + Vite + Tailwind CSS 3 + React Router + EmailJS)

## Lancer
```bash
npm install
cp .env.example .env     # puis renseigner les 3 variables EmailJS
npm run dev              # http://localhost:5173
npm run build
```

## Configurer EmailJS (envoi réel des formulaires)
1. Créez un compte sur emailjs.com, ajoutez un **Email Service** (Gmail) et notez le *Service ID*.
2. Créez un **Template** :
   - To email : l'adresse qui doit recevoir les messages
   - Subject : `{{subject}}`
   - Contenu : `{{content}}`
   (ce modèle unique sert aux deux formulaires). Vous pouvez aussi créer deux modèles et mettre le second
   dans `VITE_EMAILJS_CONTACT_TEMPLATE_ID`. Variables disponibles : nom, email, telephone, service, date, heure,
   message, objet, date_envoi, reply_to.
3. Copiez la **Public Key** (Account > General).
4. Renseignez dans `.env` : `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
5. Redémarrez `npm run dev`. Sur Vercel/Netlify, ajoutez les mêmes variables dans les réglages du projet.

Seule la clé publique est utilisée côté navigateur : aucun mot de passe ni clé privée dans le code.

## Photographies
Les images sont dans `public/images/` (déjà optimisées). Pour en changer une, remplacez le fichier en gardant le même nom.
Les correspondances nom → emplacement sont listées dans `src/data/images.js`.

## Déploiement
Vercel (`vercel.json`) ou Netlify (`public/_redirects`) gèrent les routes React Router.

# Portfolio – DJOUYAGUENG SADE CEDRIC

Portfolio personnel développé avec **React JS + Vite**, prêt pour le déploiement sur **Vercel**.

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

## 🛠 Build de production

```bash
npm run build
```

## 🌐 Déploiement sur Vercel

1. Poussez ce projet sur GitHub/GitLab
2. Connectez votre repo sur [vercel.com](https://vercel.com)
3. Vercel détecte automatiquement Vite/React — cliquez **Deploy**
4. ✅ Votre portfolio est en ligne !

## 📝 Personnalisation

### Ajouter votre photo
Dans `src/components/Hero.jsx`, remplacez la div "Photo area" par :
```jsx
<img src="/photo.jpg" alt="Cedric" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
```
Placez `photo.jpg` dans le dossier `public/`.

### Modifier les projets
Éditez le tableau `projects` dans `src/components/Projects.jsx`.

### Mettre à jour les liens de contact
Éditez le tableau `contactLinks` dans `src/components/Contact.jsx`.

### Intégrer EmailJS pour le formulaire
```bash
npm install @emailjs/browser
```
Remplacez la fonction `handleSubmit` dans `Contact.jsx` par l'appel EmailJS.

## 📁 Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx       ← Espace photo ici
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

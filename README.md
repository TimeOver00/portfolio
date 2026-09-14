# Portfolio — Ahmed Zaned

Portfolio React (Vite + TypeScript + Framer Motion) : animations au scroll, effet machine à écrire dans le hero, bascule thème clair/sombre.

## Développement local

```bash
npm install
npm run dev
```

## Déployer sur GitHub Pages

Le déploiement est automatisé par [.github/workflows/deploy.yml](.github/workflows/deploy.yml) : à chaque push sur `main`, GitHub Actions build le site et le publie sur Pages.

1. Crée un nouveau repo **public** sur GitHub (par ex. `portfolio`) via https://github.com/new — sans README/gitignore pour éviter un conflit.
2. Depuis ce dossier :

   ```bash
   git remote add origin https://github.com/<ton-user>/portfolio.git
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages** → *Build and deployment* → Source : **GitHub Actions** (pas "Deploy from a branch").
4. Le workflow se déclenche automatiquement au push. Suis sa progression dans l'onglet **Actions** du repo. Une fois vert, le site est en ligne sur `https://<ton-user>.github.io/<repo>/`.

Pour les mises à jour suivantes : modifie le contenu, commit, `git push` — le site se redéploie tout seul.

## Modifier le contenu

Tout le texte (profil, expérience, projets, compétences, formation) est centralisé dans [src/data.ts](src/data.ts) — pas besoin de toucher aux composants pour changer le contenu.

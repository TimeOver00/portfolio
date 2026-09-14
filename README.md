# Portfolio — Ahmed Zaned

Site vitrine statique (une seule page `index.html`, sans dépendance de build).

## Déployer sur GitHub Pages

1. Crée un nouveau repo **public** sur GitHub, par ex. `portfolio` (via https://github.com/new).
2. Depuis ce dossier, ajoute le remote et pousse :

   ```bash
   git remote add origin https://github.com/<ton-user>/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → Save.
4. Le site sera en ligne quelques instants après sur `https://<ton-user>.github.io/portfolio/`.

## Modifier le contenu

Tout est dans [index.html](index.html) (HTML + CSS inline, sans build). Ouvre-le directement dans un navigateur pour prévisualiser en local.

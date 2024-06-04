# Demo Next JS (Page Router)

Cette démo a pour but de monter le fonctionnement de NextJS (Framework en React)

Il existee deux types de router dans NextJS :
- Page
- App (-> Composant Client + Composant Server)

## Installation
Dans un terminal, faire la commande suivante :
```
npm create next-app@latest
```

Options choisies pour la démo :

```
√ What is your project named? ....................................... demo-next-page
√ Would you like to use TypeScript? ................................. No 
√ Would you like to use ESLint? ..................................... Yes
√ Would you like to use Tailwind CSS? ............................... No 
√ Would you like to use `src/` directory? ........................... Yes
√ Would you like to use App Router? (recommended) ................... No 
√ Would you like to customize the default import alias (@/*)? ....... No 
```

## Objectif de Next JS
- Meilleur référencement du site (SEO)
- Application moins lourd pour le client
- Page pré-rendu

## Router Page VS App 

### Page
- Pré-génération des pages
    - Rendu mémorisé :
        - SSG (Static Site Generation)
        - ISR (Incremental Static Regeneration)
    - Sur demande :
        - SSR (Server Side Rendering)

- Proxy API intégré
    - Permet de consommer des API avec des clés caché via Next JS

- Fonctionnalité React CSR (Client Side Rendering)
    - Intéraction avec l'utilisateur _(onClick)_
    - Utilisation des hooks
    - Mise en place d'un state management (Redux / Recoil / Jotai / ...) identique

- Fonctionnement du routing
    - Le contenu du dossier "page" est exposé
    - Tous les composants du dossier sont accessibles

### App 
- Deux "types" de composant
    - Client 
    - Serveur

- Proxy API intégré
    - Permet de consommer des API avec des clés caché via Next JS
    - Plus de fonctionnalité

- Fonctionnalité des composants Client
    - Interaction avecc l'utilisateur _(onClick)_
    - Utilisation des hooks

- Fonctionnalité des composant Serveur
    - Pas d'event Client
    - Pas de hook
    - Logique "backend" _(Executé depuis le serveur)_
        - Consommer une API / une DB 
        - Variable privé _(Clé d'API par exemple)_
    - Seul le rendu est envoyé au client

- Fonctionnement du routing
    - Le contenu du dossier "app" est exposé
    - Les composaants sont accessibles en  fonction de leurs noms via une convention de nommage _(Page.jsx / Loading.jsx / 404.jsx / ...)_

## Structure de la démo
Le site sera constitué des pages suivantes :
```
/               : Page d'accueil
/region         : Page des régions (Listing du fichier JSON)
/region/:id     : Page détail d'une région 
/pokemon        : Page sur les pokémons (Quelques liens vers des pokémons) 
/pokemon/:id    : Page détail d'un pokémon (Via la pokeapi)
/about          : Page d'info avec un formulaire
```

La structure de fichier du dossier "pages" sera donc :
```
index.jsx
region
    index.jsx
    [id].jsx
pokemon
    index.jsx
    [id].jsx    
about.jsx
```

# Nyaldee Homepage

<p align="center">
  <img src="Nyaldee Homepage.png" alt="Capture d'écran de Nyaldee Homepage">
</p>

*[Read in English](README.md)*

Une page de démarrage / nouvel onglet personnelle pour navigateur, construite avec **zéro dépendance externe et zéro étape de build** : HTML5, CSS et JavaScript vanilla purs. Pas de `npm install`, pas de bundler, pas de serveur de dev — un double-clic sur `index.html` suffit, elle s'ouvre directement en `file://`.

## Fonctionnalités

- Boutons de catégories pour tes favoris, chacun affichant son propre nuage de liens sous la rangée au clic
- Recherche floue (portée depuis l'algorithme de classement de [MAGI Launcher](https://github.com/Nyaldee/MAGI-Launcher)) qui filtre les liens en direct et peut ouvrir plusieurs catégories correspondantes à la fois
- Navigation clavier complète — les flèches marchent partout, pas seulement quand la barre de recherche a le focus, et ne lui volent jamais ce focus
- Horloge en direct à côté de la barre de recherche
- Raccourcis de recherche par site en bas à gauche (Google, YouTube, GitHub...) — tape une requête et Entrée pour chercher directement sur ce site
- Mise en page 100% responsive : uniquement `%`, `vw`, `vh`, `em`, aucune taille fixe en pixels (à part l'épaisseur de bordure, qui n'est pas une dimension de mise en page)
- Même système de thèmes de couleur que MAGI Launcher/[Ports Launcher](https://github.com/Nyaldee/Ports-Launcher) — plus de 70 palettes intégrées, change celle active en éditant une seule ligne

## Raccourcis clavier

| Touche | Action |
|---|---|
| Taper dans la barre de recherche | Filtre les liens en direct (recherche floue) ; les catégories correspondantes s'ouvrent automatiquement, plusieurs à la fois si besoin |
| `→` / `←` | Déplace la sélection sur les boutons de catégories, ou sur les liens visibles d'une catégorie ouverte |
| `↓` | Depuis la rangée de catégories : entre dans le nuage de liens de la catégorie sélectionnée. Depuis un lien : saute au lien juste en dessous |
| `↑` | Depuis un lien : saute au lien juste au-dessus, ou remonte au bouton de sa catégorie depuis la première rangée |
| `Entrée` | Ouvre/ferme la catégorie sélectionnée, ou suit le lien sélectionné |
| Clic sur un bouton de catégorie | Le bascule ouvert/fermé. Hors recherche, une seule catégorie reste ouverte à la fois ; pendant une recherche, chacune se bascule indépendamment sans affecter les autres |

## Recherche

Taper dans la barre de recherche classe chaque lien, dans l'ordre :

1. **Le nom commence par la recherche** — en tête de liste
2. **Le nom contient la recherche** — ensuite
3. **Correspondance floue en sous-séquence** (`gh` trouve « GitHub ») — en dernier recours, pour qu'une faute de frappe ne donne jamais un écran vide

Si rien ne correspond du tout (même flou), tous les liens sont affichés plutôt qu'une page vide. Il n'y a pas de gestion des accents : une recherche sans accent ne correspond pas directement à un nom accentué (ex : « credit » vs « Crédit Agricole ») — elle retombe sur l'affichage de tout plutôt que rien.

## Configuration

Tout est piloté par deux fichiers JavaScript ordinaires, chargés comme de simples balises `<script>` (pas de `fetch()`/JSON — bloqué par les navigateurs sur les fichiers locaux), pour que l'appli marche directement en `file://`.

### `links.js`

```js
const linksData = {
  community: [
    { text: "MyAnimeList", url: "https://myanimelist.net/" }
  ],
  tools: [
    { text: "Discord Developer Portal", url: "https://discord.com/developers/applications" }
  ]
};
```

Chaque clé de premier niveau devient un bouton de catégorie (son nom affiché est juste la clé, avec une majuscule). Chaque `{ text, url }` à l'intérieur devient un bouton de lien. Ajoute, retire ou réordonne librement — rien d'autre à toucher.

`links.js` contient aussi `siteSearches`, les raccourcis de recherche par site affichés en bas à gauche :

```js
const siteSearches = [
  { name: "Google", url: "https://www.google.com/search?q=%s" }
];
```

`%s` est remplacé par le texte tapé (encodé pour l'URL) sur Entrée. Ajoute, retire ou réordonne librement — même règle que `linksData`.

### `themes.js`

```js
const THEMES_DATA = {
  theme: "nier_yorha",
  font_family: "Segoe UI",
  border: 2,
  themes: {
    nier_yorha: {
      search_background: "#bab5a1",
      search_text: "#6a6355",
      list_background: "#d1cdb7",
      list_text: "#454138",
      selected_background: "#454138",
      selected_text: "#d1cdb7",
      border: "#454138"
    }
  }
};
```

Même catalogue de thèmes (70+ palettes, surtout des palettes de personnages/jeux) que MAGI Launcher et Ports Launcher. Change celui actif en modifiant `theme` en haut du fichier.

## Structure du projet

```
index.html    markup + toute la logique de l'appli : application du thème, rendu, recherche floue, navigation clavier
style.css     mise en page responsive (%, vw, vh, em uniquement)
links.js      tes favoris (linksData)
themes.js     palettes de couleur (THEMES_DATA), catalogue partagé avec MAGI Launcher/Ports Launcher
favicon.png   icône de l'onglet du navigateur
```

## Pourquoi aucune dépendance ?

L'idée est une page qui s'ouvre instantanément, hors-ligne, pour toujours, sans rien à installer ni à maintenir à jour — pas de framework, pas de gestionnaire de paquets, pas d'étape de build qui devienne obsolète. Éditer `links.js` ou `themes.js` puis rafraîchir la page, c'est tout le workflow.

## Crédits

Construit avec [Claude](https://claude.com) (l'assistant de code IA d'Anthropic).

## Licence

Copyright (C) 2026 Nyaldee. Distribué sous licence [GNU General Public License v3.0](LICENSE) — voir le fichier `LICENSE` pour le texte complet.

/*
 * C'EST CE FICHIER QU'ON EDITE pour ajouter/retirer un site ou une
 * categorie -- une entree = { text, url }, une categorie = une cle de
 * l'objet (son nom affiche est juste la cle avec une majuscule). Tout le
 * reste (bouton, nuage de liens) est genere par index.html a partir de cet
 * objet -- rien d'autre a maintenir a la main en plus de ces donnees.
 *
 * Variable globale ordinaire (pas de module, pas d'export) : charge via un
 * simple <script src="links.js"> classique dans index.html, avant le
 * script principal qui la consomme -- marche directement en file://,
 * contrairement a un fetch() d'un vrai .json (bloque par les navigateurs
 * pour les fichiers locaux).
 */

// Mini barres de recherche par site (bas de page) -- "%s" est remplace par
// le texte tape (encodeURIComponent) avant d'ouvrir l'URL sur Entree.
const siteSearches = [
  { name: "AniList", url: "https://anilist.co/search/anime?search=%s" },
  { name: "Backloggd", url: "https://backloggd.com/search/games/%s" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=%s" },
  { name: "GitHub", url: "https://github.com/search?q=%s" },
  { name: "Google", url: "https://google.com/search?q=%s" },
  { name: "IMDb", url: "https://imdb.com/find/?q=%s" },
  { name: "MyAnimeList", url: "https://myanimelist.net/search/all?q=%s" },
  { name: "Reddit", url: "https://reddit.com/search/?q=%s" },
  { name: "SteamDB", url: "https://steamdb.info/search/?a=app&q=%s" },
  { name: "SteamGridDB", url: "https://steamgriddb.com/search/grids?term=%s" },
  { name: "TikTok", url: "https://tiktok.com/search?q=%s" },
  { name: "VNDB", url: "https://vndb.org/v?sq=%s" },
  { name: "Wikipedia", url: "https://en.wikipedia.org/w/index.php?search=%s" },
  { name: "YouTube", url: "https://youtube.com/results?search_query=%s" },
];

const linksData = {
    community: [
    { name: "Backloggd", url: "https://backloggd.com/" },
    { name: "Instagram", url: "https://instagram.com/" },
    { name: "MyAnimeList", url: "https://myanimelist.net/" },
    { name: "Snapchat", url: "https://snapchat.com/web/" },
    { name: "TikTok", url: "https://tiktok.com/" },
    { name: "Twitch", url: "https://twitch.tv/" },
    { name: "X | Twitter", url: "https://x.com/" },
    { name: "YouTube", url: "https://youtube.com/" },
  ],
  downloads: [
    { name: "AUR", url: "https://aur.archlinux.org/" },
  ],
  ecommerce: [
    { name: "Compumsa", url: "https://compumsa.eu/" },
    { name: "Silicon Lottery", url: "https://siliconlottery.com/" },
  ],
  misc: [
    { name: "Gmail", url: "https://mail.google.com/" },
    { name: "Namecheap", url: "https://namecheap.com/" },
    { name: "openings.moe", url: "https://openings.moe" },
    { name: "PayPal", url: "https://paypal.com/" },
    { name: "sakugabooru", url: "https://sakugabooru.com/" },
    { name: "Speedtest", url: "https://speedtest.net/" },
    { name: "VG Insights", url: "https://vginsights.com/" },
    { name: "Yandex.Images", url: "https://yandex.com/images/" },
  ],
  news: [
    { name: "FUJITV", url: "https://fujitv.live/fujitv/" },
    { name: "HoYoLAB", url: "https://hoyolab.com/" },
    { name: "Enka.Network", url: "https://enka.network/" },
    { name: "SteamDB", url: "https://steamdb.info/sales/" },
  ],
  tools: [
    { name: "Discord Developer Portal", url: "https://discord.com/developers/applications" },
    { name: "Emoji Keyboard", url: "https://emojikeyboard.top/fr/" },
    { name: "PlayStation (PSX) Cue Maker", url: "http://nielsbuus.dk/pg/psx_cue_maker/" },
    { name: "SymphoniaSaveViewer", url: "http://rngeoff.com/SymphoniaSaveViewer/" },
    { name: "who.is", url: "https://who.is/" },
  ]
};

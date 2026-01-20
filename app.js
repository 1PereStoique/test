// URLs des pages de vote
const VOTE_1 = "https://serveur-minecraft.com/4761";
const VOTE_2 = "https://EXEMPLE-SITE-2.com/vote";

// Boutons
document.getElementById("btn-all").addEventListener("click", () => {
  window.open(VOTE_1, "_blank", "noopener");
  window.open(VOTE_2, "_blank", "noopener");
});

document.getElementById("btn-vote-1").addEventListener("click", () => {
  window.open(VOTE_1, "_blank", "noopener");
});

document.getElementById("btn-vote-2").addEventListener("click", () => {
  window.open(VOTE_2, "_blank", "noopener");
});

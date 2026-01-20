const VOTE_1 = "https://serveur-minecraft.com/4761";
const VOTE_2 = "https://serveur-prive.net/minecraft/decacraft/vote";

const openTab = (url) => window.open(url, "_blank", "noopener");

document.getElementById("btn-both").addEventListener("click", () => {
  // Un seul clic utilisateur -> le navigateur autorise généralement 2 opens.
  openTab(VOTE_1);
  openTab(VOTE_2);
});

document.getElementById("btn-vote-1").addEventListener("click", (e) => {
  e.preventDefault();
  openTab(VOTE_1);
});

document.getElementById("btn-vote-2").addEventListener("click", (e) => {
  e.preventDefault();
  openTab(VOTE_2);
});

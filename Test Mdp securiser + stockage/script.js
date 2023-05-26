// Récupérer les éléments du DOM
const inputMotDePasse = document.getElementById("motdepasse");
const boutonEnregistrer = document.getElementById("enregistrer");
const boutonAfficher = document.getElementById("afficher");
const affichageMotDePasse = document.getElementById("affichageMotDePasse");

const motsDePasse = [];

// Événement pour enregistrer le mot de passe lors du clic sur le bouton "Enregistrer"
boutonEnregistrer.addEventListener("click", function () {
    const motDePasse = inputMotDePasse.value;
    motsDePasse.push(motDePasse);
    inputMotDePasse.value = ""; // Réinitialiser l'input
});

// Événement pour afficher les mots de passe lors du clic sur le bouton "Afficher"
boutonAfficher.addEventListener("click", function () {
    affichageMotDePasse.innerHTML = ""; // Réinitialiser le contenu

    motsDePasse.forEach(function (motDePasse) {
        const motDePasseElement = document.createElement("p");
        motDePasseElement.textContent = "Mot de passe : " + motDePasse;
        affichageMotDePasse.appendChild(motDePasseElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const mois = ["Aluùnsùn", "AFATƆ́N", "Xwè", "Azan", "Liyasùn", "Jùn", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const aujourdHui = new Date();
  const calendrierModal = document.getElementById("calendrier-modal");
  const boutonOuvrirCalendrier = document.getElementById("ouvrir-calendrier");
  const dateSelectionneeElement = document.getElementById("date-selectionnee");
  const moisEtAnnee = document.getElementById("moisEtAnnee");
  const joursContainer = document.getElementById("jours");
  const datesContainer = document.getElementById("dates");

  let dateCourante = new Date();

  // Afficher la date actuelle au chargement
  function afficherDate(date) {
    const jour = date.getDate();
    const moisActuel = mois[date.getMonth()];
    const annee = date.getFullYear();
    dateSelectionneeElement.textContent = `${jour} ${moisActuel} ${annee}`;
  }

  afficherDate(aujourdHui);

  // Ouvrir et fermer le calendrier
  boutonOuvrirCalendrier.addEventListener("click", () => {
    calendrierModal.classList.toggle("hidden");
  });

  // Ajouter les jours dans le conteneur
  jours.forEach(jour => {
    const jourDiv = document.createElement("div");
    jourDiv.textContent = jour;
    joursContainer.appendChild(jourDiv);
  });

  // Fonction pour afficher le calendrier
  function afficherCalendrier(date) {
    const moisIndex = date.getMonth();
    const annee = date.getFullYear();

    moisEtAnnee.textContent = `${mois[moisIndex]} ${annee}`;

    const premierJour = new Date(annee, moisIndex, 1).getDay();
    const joursDansMois = new Date(annee, moisIndex + 1, 0).getDate();

    datesContainer.innerHTML = "";

    // Ajouter les jours vides avant le premier jour du mois
    for (let i = 0; i < premierJour; i++) {
      const caseVide = document.createElement("div");
      datesContainer.appendChild(caseVide);
    }

    // Ajouter les jours du mois
    for (let jour = 1; jour <= joursDansMois; jour++) {
      const dateDiv = document.createElement("div");
      dateDiv.textContent = jour;
      dateDiv.classList.add("date");

      // Ajouter la classe pour le jour actuel
      if (
        annee === aujourdHui.getFullYear() &&
        moisIndex === aujourdHui.getMonth() &&
        jour === aujourdHui.getDate()
      ) {
        dateDiv.classList.add("actuel");
      }

      // Ajouter un événement click pour chaque date
      dateDiv.addEventListener("click", function () {
        // Supprimer la classe 'selected' des autres dates
        document.querySelectorAll(".date").forEach(date => date.classList.remove("selected"));

        // Ajouter la classe 'selected' à la date cliquée
        dateDiv.classList.add("selected");

        // Mettre à jour la date sélectionnée
        dateCourante = new Date(annee, moisIndex, jour);
        afficherDate(dateCourante);

        // Fermer le calendrier
        calendrierModal.classList.add("hidden");
      });

      datesContainer.appendChild(dateDiv);
    }
  }

  afficherCalendrier(dateCourante);

  // Gestion des boutons précédent et suivant
  document.getElementById("prev").addEventListener("click", () => {
    dateCourante.setMonth(dateCourante.getMonth() - 1);
    afficherCalendrier(dateCourante);
  });

  document.getElementById("next").addEventListener("click", () => {
    dateCourante.setMonth(dateCourante.getMonth() + 1);
    afficherCalendrier(dateCourante);
  });

  // Gestion des boutons "Hier" et "Demain"
  document.getElementById("hier").addEventListener("click", () => {
    dateCourante.setDate(dateCourante.getDate() - 1);
    afficherDate(dateCourante);
    afficherCalendrier(dateCourante);
  });

  document.getElementById("demain").addEventListener("click", () => {
    dateCourante.setDate(dateCourante.getDate() + 1);
    afficherDate(dateCourante);
    afficherCalendrier(dateCourante);
  });
});

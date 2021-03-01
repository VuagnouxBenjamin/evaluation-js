// DECLARATION DES VARIABLES GLOBALES ----------------------------------------------------------------
// -- Exercice 1
const exercice1Btn = document.getElementById('exercice1Btn');
const exercice1return = document.getElementById('exercice1return');
// -- Exercice 2 
const exercice2Btn = document.getElementById("exercice2Btn");
const exercice2return = document.getElementById("exercice2return");
// -- Exercice 3 
const exercice3Btn = document.getElementById("exercice3Btn");
const exercice3return = document.getElementById("exercice3return");
// -- Exercice 4 
const exercice4Btn = document.getElementById("exercice4Btn");
const exercice4return = document.getElementById("exercice4return");

// DECLARATION DES FONCTIONS -------------------------------------------------------------------------
// -- Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux.
const jeunesMoyenVieux = () => {
    let ages = new Array();
    let input;
    do {
        input = window.prompt("Entrez un age à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        // Est-ce que l'input est un nombre valid; 
        while (isNaN(input)) {
            input = window.prompt("Erreur : Entrez un age (nombre) à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        };
        // break si l'utilisateur annule. 
        if (ages.length == 0 && input === null) {
            return false;
        } else if (input === null || input === "") {
            break;
        };
        // Si tout est ok, on ajoute dans le tableau. 
        ages.push(input);
    } while (input < 100);
    // comptage des jeunes, moyens, vieux.  
    const jeunes = ages.filter(age => age < 20).length;
    const moyens = ages.filter(age => age >= 20 && age < 40).length;
    const vieux = ages.filter(age => age >= 40).length;
    // détails - au singulier ou au pluriel... 
    let j = jeunes > 1 ? "jeunes" : "jeune";
    let m = moyens > 1 ? "moyens" : "moyen";
    exercice1Btn.innerHTML = "Relancer la fonction";
    //valeur de retour
    return exercice1return.innerHTML = `Parmi les ages que vous avez saisi vous avez : <br> ${jeunes} ${j} <br> ${moyens} ${m} <br> ${vieux} vieux.`;
};

// Exercice 2 - Table de multiplication 
const tableDeMultiplication = () => {
    let multiple = parseInt(window.prompt("Entrez le multiple de la table à afficher", ""));
    //check si les valeurs sont valides
    while (isNaN(multiple)) {
        multiple = parseInt(window.prompt("Erreur : Entrez le multiple (nombre) de la table à afficher", ""));
    };
    //reset le html du block de resultat
    exercice2return.innerHTML = "Votre table de multiplication : <br>";
    //boucle calcul de la table de multiplication 
    for (let i = 1; i <= 10; i++) {
        exercice2return.innerHTML += (`${i} x ${multiple} = ${i * multiple} <br>`);
    };
    //détails
    exercice2Btn.innerHTML = "Relancer la fonction";
};
// bug - ne permet pas d'annuler. -------------------------------------------------

// Ecercice 3 - recherche d'un prénom 
const rechercheUnPrenom = () => {
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.log("🚀 ~ Tableau de départ", tab)
    let input = window.prompt("Entrez un prénom", "");
    let index = tab.indexOf(input);
    // si prénom trouvé, on le suppr + case blanche a la fin de tab.
    if (index >= 0) {
        tab.splice(index, 1);
        tab.push(' ');
        exercice3return.innerHTML = "Appuyez sur F12 pour voir le resultat dans la console";
        console.log(`Le prénom ${input} à bien été retiré de l'array de départ. Votre nouvel array :`, tab)
    } else {
        exercice3return.innerHTML = "Ce prénom n'existe pas dans la liste";
    }
    //détails
    exercice3Btn.innerHTML = "Relancer la fonction";
};
// bug - case sensitive ---------------------------------------------------------------

// Exercice 4 - vérification d'un formulaire.  
const totalDUneCommande = () => {
    let PU = parseInt(window.prompt('Entrez le prix unitaire (PU)'));
    let QTECOM = parseInt(window.prompt('Entrez la quantité commandée (QTECOM)'));
    let TOT = PU * QTECOM;
    let remise;
    let remisePourcent;
    if (TOT >= 100 && TOT < 200) {
        remise = 5;
    } else if (TOT >= 100) {
        remise = 10;
    } else remise = 0;
    // a terminer ... 

}

// GESTION DES EVENEMENTS ------------------------------------------------------------------------- 
// -- Exercice 1
exercice1Btn.onclick = jeunesMoyenVieux;
// -- Exercice 2
exercice2Btn.onclick = tableDeMultiplication;
// -- Exercice 3
exercice3Btn.onclick = rechercheUnPrenom;
// -- Exercice 3
exercice4Btn.onclick = totalDUneCommande;
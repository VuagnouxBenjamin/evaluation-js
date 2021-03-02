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
    let ageArray = new Array();
    let getAge;
    do {
        getAge = window.prompt("Entrez un age à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        // Est-ce que le getAge est un nombre valid; 
        while (isNaN(getAge)) {
            getAge = window.prompt("Erreur : Entrez un age (nombre) à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        };
        // break si l'utilisateur annule. 
        if (ageArray.length == 0 && getAge === null) {
            return false;
        } else if (getAge === null || getAge === "") {
            break;
        };
        // Si tout est ok, on ajoute dans le tableau. 
        ageArray.push(getAge);
    } while (getAge < 100);
    // comptage des jeunes, moyens, vieux.  
    const jeunes = ageArray.filter(age => age < 20).length;
    const moyens = ageArray.filter(age => age >= 20 && age < 40).length;
    const vieux = ageArray.filter(age => age >= 40).length;
    // détails - au singulier ou au pluriel... 
    let oneOrMoreJeunes = jeunes > 1 ? "jeunes" : "jeune";
    let oneOrMoreMoyens = moyens > 1 ? "moyens" : "moyen";
    exercice1Btn.innerHTML = "Relancer la fonction";
    //valeur de retour
    return exercice1return.innerHTML = `Parmi les ages que vous avez saisi vous avez : <br> ${jeunes} ${oneOrMoreJeunes} <br> ${moyens} ${oneOrMoreMoyens} <br> ${vieux} vieux.`;
};

// Exercice 2 - Table de multiplication 
const tableDeMultiplication = () => {
    let getMultiple = parseInt(window.prompt("Entrez le multiple de la table à afficher", ""));
    //check si les valeurs sont valides
    while (isNaN(getMultiple)) {
        getMultiple = parseInt(window.prompt("Erreur : Entrez le multiple (nombre) de la table à afficher", ""));
    };
    //reset le html du block de resultat
    exercice2return.innerHTML = "Votre table de multiplication : <br>";
    //boucle calcul de la table de multiplication 
    for (let i = 1; i <= 10; i++) {
        exercice2return.innerHTML += (`${i} x ${getMultiple} = ${i * getMultiple} <br>`);
    };
    //détails
    exercice2Btn.innerHTML = "Relancer la fonction";
};
// bug - ne permet pas d'annuler. -------------------------------------------------

// Ecercice 3 - recherche d'un prénom 
const rechercheUnPrenom = () => {
    let baseTab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let baseTabCopy = [...baseTab];
    console.log("🚀 ~ Tableau de départ", baseTabCopy)
    let input = window.prompt("Entrez un prénom", "");
    let index = baseTab.indexOf(input);
    // si prénom trouvé, on le suppr + case blanche a la fin de baseTab.
    if (index >= 0) {
        baseTab.splice(index, 1);
        baseTab.push(' ');
        exercice3return.innerHTML = "Appuyez sur F12 pour voir le resultat dans la console";
        console.log(`Le prénom ${input} à bien été retiré de l'array de départ. Votre nouvel array :`, baseTab)
    } else {
        exercice3return.innerHTML = `Le prénom ${input} n'existe pas dans la liste, attention aux majuscules et aux accents.`;
    };
    //détails
    exercice3Btn.innerHTML = "Relancer la fonction";
};
// bug - case sensitive ---------------------------------------------------------------

// Exercice 4 - vérification d'un formulaire.  
const totalDUneCommande = () => {
    let PU = parseInt(window.prompt('Entrez le prix unitaire (PU)'));
    let QTECOM = parseInt(window.prompt('Entrez la quantité commandée (QTECOM)'));
    //check si les valeurs sont correctes. 
    while (isNaN(PU)) {
        PU = parseInt(window.prompt('Erreur : Entrez le prix unitaire (PU)'));
    };
    while (isNaN(QTECOM)) {
        QTECOM = parseInt(window.prompt('Erreur : Entrez la quantité commandée (QTECOM)'));
    };
    let TOT = PU * QTECOM;
    //préparation des variables pour le resultat. 
    let remisePourcent = getRemise(TOT).pourcentage;
    let totalRemise = TOT * getRemise(TOT).multiple;
    let totalRemiseEur = TOT - totalRemise;
    let portPourcent = getPort(totalRemise).pourcentage;
    let totalPort = TOT * getPort(totalRemise).multiple;
    //On applique un FDP mini de 6€
    if (totalRemise < 500 && totalPort < 6) {
        totalPort = 6;
        portPourcent = "6€ (frais minimum à payer)"
    };
    let totalAPayer = totalRemise + totalPort;
    //Résultat. 
    exercice4return.innerHTML = `PU = ${PU} <br> Quantité = ${QTECOM} <hr> remise = ${remisePourcent} (-${totalRemiseEur.toFixed(1)}€) soit ${totalRemise.toFixed(2)}€ <br> frais de port = ${portPourcent} <hr> À payer ${totalAPayer}€.`
};

const getRemise = (totalHorsRemise) => {
    let remise;
    if (totalHorsRemise >= 100 && totalHorsRemise <= 200) {
        remise = {
            pourcentage: "5%",
            multiple: 0.95
        };
    } else if (totalHorsRemise >= 200) {
        remise = {
            pourcentage: "10%",
            multiple: 0.90
        };
    } else remise = {
        pourcentage: "0%",
        multiple: 1
    };
    return remise;
};

const getPort = (totalRemise) => {
    let port;
    if (totalRemise >= 500) {
        port = {
            pourcentage: "0%",
            multiple: 0
        }
    } else {
        port = {
            pourcentage: "2%",
            multiple: 0.02
        }
    };
    return port;
};


// GESTION DES EVENEMENTS ------------------------------------------------------------------------- 
// -- Exercice 1
exercice1Btn.onclick = jeunesMoyenVieux;
// -- Exercice 2
exercice2Btn.onclick = tableDeMultiplication;
// -- Exercice 3
exercice3Btn.onclick = rechercheUnPrenom;
// -- Exercice 3
exercice4Btn.onclick = totalDUneCommande;
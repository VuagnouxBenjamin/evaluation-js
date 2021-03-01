// Declaration des variables globales. 
const exercice1Btn = document.getElementById('exercice1Btn');
const exercice1return = document.getElementById('exercice1return');

// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux.
const jeunesMoyenVieux = () => {
    let ages = new Array();
    let input;
    do {
        input = window.prompt("Entrez un age à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        //Check if input is a valid number; 
        while (isNaN(input)) {
            input = window.prompt("Erreur : Entrez un age (nombre) à ajouter au compte, le comptage est arrété à la saisie d'un centenaire.", "");
        };
        // break if user chose to close prompt window. 
        if (input === null || input === "") {
            break;
        };
        // if everything ok, added to array. 
        ages.push(input);
    } while (input < 100);
    const jeunes = ages.filter(age => age < 20).length;
    const moyens = ages.filter(age => age >= 20 && age < 40).length;
    const vieux = ages.filter(age => age >= 40).length;
    // au singulier ou au pluriel. 
    let j = jeunes > 1 ? "jeunes" : "jeune";
    let m = moyens > 1 ? "moyens" : "moyen";
    // return value 
    return exercice1return.innerHTML = `Parmi les ages que vous avez saisi vous avez : <br> ${jeunes} ${j} <br> ${moyens} ${m} <br> ${vieux} vieux.`;
}


// Events gestion. 
exercice1Btn.onclick = jeunesMoyenVieux;
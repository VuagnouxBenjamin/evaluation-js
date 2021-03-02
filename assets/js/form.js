// CONSIGNES EXERCICE : 
// Le formulaire sera envoyé grâce à la méthode "Post". ------------------------ OK
// La "Société" doit comporter au moins 1 caractère. --------------------------- OK
// La "Personne à contacter" doit comporter au moins 1 caractère. -------------- OK 
// Le "Code postal" doit comporter 5 caractères numériques. -------------------- OK 
// La "Ville" doit comporter au moins 1 caractère. ----------------------------- OK 
// Le Email doit comporter au moins le caractère "@". -------------------------- OK 

//-------------------------------------------------------------
// --- DECLARATION DES VARIABLES ------------------------------
//-------------------------------------------------------------
// VALEURS
const form = document.getElementById("form");
const societe = document.getElementById("societeInput");
const personneAContacter = document.getElementById("personneAContacterInput");
const codePostal = document.getElementById("codePostalInput");
const ville = document.getElementById("villeInput");
const email = document.getElementById("emailInput");
const telephone = document.getElementById("telephoneInput");

// Buttons
const envoyer = document.getElementById("envoyer");
const effacer = document.getElementById("effacer");

// ERREURS
const societeErr = document.getElementById("societeErr");
const personneAContacterErr = document.getElementById("personneAContacterErr");
const codePostalErr = document.getElementById("codePostalErr");
const villeErr = document.getElementById("villeErr");
const emailErr = document.getElementById("emailErr");
const telephoneErr = document.getElementById("telephoneErr");

// select
const environnement = document.getElementById("environnementSelect");
const showSelect = document.getElementById("showSelect");

// Regex validation 
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

//-------------------------------------------------------------
// --- DECLARATION DES FONCTIONS ------------------------------
//-------------------------------------------------------------
// -- Gestion du select de l'environnement technique du projet. 
let alreadySelected = new Array();
environnement.addEventListener("change", e => {
    // La valeur n'est pas "choisissez" & pas choisir deux fois la même valeur. 
    if (environnement.value != "Choisissez..." && !alreadySelected.includes(environnement.value)) {
        alreadySelected.push(environnement.value);
        // dès que la valeur du select change, on crée une <option selected> dans le deuxième champ, le "value="x"" est créé dynamiquement". 
        showSelect.innerHTML += `<option value="${environnement.value}" selected>${environnement.value}</option>`;
    }
    console.log(alreadySelected);
})

// -- form validation
//-------------------
form.addEventListener('submit', (e) => {
    //ERREUR SI LES VALEURS SONT INCORECTES
    //Input société
    if (societe.value.length <= 1) {
        societeErr.innerHTML = "Le nom de la société doit être renseigné";
        societe.classList.add("border-danger");
        e.preventDefault();
    };
    //Input personneAContacter
    if (personneAContacter.value.length <= 1) {
        personneAContacterErr.innerHTML = "Le nom de la personne à contacter doit être renseigné";
        personneAContacter.classList.add("border-danger");
        e.preventDefault();
    };
    //Input codePostal
    if (isNaN(codePostal.value) || codePostal.value.length != 5) {
        codePostalErr.innerHTML = "Votre code postal doit être composé de 5 chiffres";
        codePostal.classList.add("border-danger");
        e.preventDefault();
    };
    //Input ville
    if (ville.value.length <= 1) {
        villeErr.innerHTML = "Le nom de la ville doit être renseigné";
        ville.classList.add("border-danger");
        e.preventDefault();
    };
    //Input email -------------------------------------------------- REGEX
    if (!emailRegex.test(email.value)) {
        emailErr.innerHTML = "Veuillez saisir une adresse e-mail valide";
        email.classList.add("border-danger");
        e.preventDefault();
    };
    //Input telehone ----------------------------------------------- REGEX
    // tel pas obligatoire, si valeur entrée par l'utilisateur validation. 
    if (telephone.value.length > 1) {
        if (!phoneRegex.test(telephone.value)) {
            telephoneErr.innerHTML = "Numéro non reconnu essayez les formats 06 01 02 03 04 ou +33 6 01 02 03 04";
            telephone.classList.add("border-danger");
            e.preventDefault();
        } else if (phoneRegex.test(telephone.value)) {
            telephoneErr.innerHTML = "";
            telephone.classList.remove("border-danger");
            telephone.classList.add("border-success");
        }
    };
    // si utilisateur decide de ne plus donner son tel, plus de validation. 
    if (telephone.value.length == 0) {
        telephoneErr.innerHTML = "";
        telephone.classList.remove("border-danger");
    };

    //RETRAIT ERREUR SI VALEURS CORRECTES
    //Input société
    if (societe.value.length >= 1) {
        societeErr.innerHTML = "";
        societe.classList.remove("border-danger");
        societe.classList.add("border-success");
    };
    //Input personneAContacter
    if (personneAContacter.value.length >= 1) {
        personneAContacterErr.innerHTML = "";
        personneAContacter.classList.remove("border-danger");
        personneAContacter.classList.add("border-success");
    };
    //Input codePostal
    if (!isNaN(codePostal.value) && codePostal.value.length == 5) {
        codePostalErr.innerHTML = "";
        codePostal.classList.remove("border-danger");
        codePostal.classList.add("border-success");
    };
    //Input ville   
    if (ville.value.length >= 1) {
        villeErr.innerHTML = "";
        ville.classList.remove("border-danger");
        ville.classList.add("border-success");
    };
    //Input email
    if (emailRegex.test(email.value)) {
        emailErr.innerHTML = "";
        email.classList.remove("border-danger");
        email.classList.add("border-success");
    };
})
// HELLO WORLD

const titre = document.getElementById("hello");
const mcflan = document.getElementById("mcflan");
//const titre = docume.querySelector("#hello")

titre.innerHTML = "Hello World !! ";
console.log(titre);

// EXERCIE CONDITION

let banane = "T\'es sourd Mcflan, espèce de crème anglaise ! ";


if (banane.length >=20) {
    console.log(banane)
}

if (!banane.length >=20) {
   mcflan.innerHTML = banane; 
}else {
    mcflan.innerHTML = "erreur ! ";  
}

console.log(banane.length)

// Calcul 

let maths1 = 44;
let maths2 = 27;
let resultat = maths1 * maths2 + maths1;
console.log(resultat);

let maths3 = 3;

let resultat2 = maths1 % maths3
console.log(resultat2);

if (maths1 % 2 == 0) {
    console.log("le nombre testé est un nombre paire.")
}else {
    console.log("le nombre testé est un nombre impair.") 
}

let color = "#fff";
switch(color) {

    case "#ff6b33":
        console.log("Tu aime l'orange")
        break;
    case "#55ff33":
        console.log("Toi tu aime l'alcool")
        break;
    case "#4d00ff":
        console.log('GLOU GLU GLOU !')
        break;
    default:
        console.log('Message par default!')
}

// Les Boucles

for ( let pas = 0; pas <= 5; pas++) {
    if (pas != 0) {
        console.log("j'ai fait " + pas + " pas vers le nord.")
    }
   
}
let stop_brasse = 4512
for ( let brasse = 0; brasse <= 10000; brasse++) {
    if (brasse != 0) {
        console.log("j'ai fait " + brasse + " brasse(s) vers le nord.")
    }
    if( brasse == stop_brasse) {
        console.log("tu n'es pas Philippe croizon, tu vaux moins qu'un cul de jate, tu s'est pas aussi bien nager qu'une madeleine")
        break;
    }
   
}

// LES FONCTIONS

function carre(nbr) {
    return nbr ** 2 
}

let nbr_au_carre = 10;
let resultat_carre = carre(nbr_au_carre);
console.log(resultat_carre);

if ( carre(nbr_au_carre) > 90) {
    console.log("le carré de 10 est supérieur à 90")
}

let mon_mood = "HEUREUX !!!!!";
let mon_mood_trois_fois = mon_mood.repeat(3);
console.log(mon_mood_trois_fois)

let nombre_A = 41
let nombre_B = 17

function multiplication(nbra, nbrb) {
    return nbra * nbrb
}

let mult = multiplication(nombre_A, nombre_B);
console.log(mult)

let mult1 = division(nombre_A, nombre_B);
console.log(mult1)



function division(nbra, nbrb) {
    if ( nbrb != 0){
        return nbra / nbrb
    }else {
        return Infinity
    }
  
}
console.log(division(nombre_A,nombre_B))

//version naive

function isEven(nbr) {
    if ( nbr % 2 == 0) {
        return true
    }else {
        return false
    }
}

// version optimisé

function isEven(nbr) {
    return nbr % 2 == 0;
}

console.log(isEven(47))

// changement de classe

//GetElementsByClassName -> retourne toujour un tableau, même si il y a qu'un seul élément.
//const red = document.getElementsByClassName('red') [0];
const red = document.querySelector('.red');
red.className = "blue"; // à éviter
red.classList.add("gras");
red.classList.remove("blue");
red.classList.add("red");
console.log(red)

//EXERCICE
// Faire une fonction 
//replaceC(element_a_cibler, ancienne_class, nouvelle_classe)

//replaceC(<a>, "btn-primary", "btn-danger")

// <a href="#" class="btn btn-primary">Envoyer</a>

//faire le coprs de la fonction, cette fonction ne retourne rien


function replaceC(target, oldClass, nexClass) {
    const t = document.querySelector(target);
    if ( oldClass !== nexClass) {
        if( t.classList.contains(oldClass)){
            t.classList.remove(oldClass)
            t.classList.add(newClass)
        }else{
            console.error("la classe n'existe pas dans l'élément " + target)
        }
    }else{
        console.error("Vous voulez remplacer la class par elle même")
    }
}

replaceC("#exo", "autruche", "green")

/*
    Créez une fonction qui : 
        demande la saisie d'un rayon ;
*/

        // la surface d'un cercle est de pi * r2

        function surface(r, isCircule) {
            if (isCircule){
                return Math.PI * r ** 2; 
            }else {
                return r ** 2; // c'est un carré
            }
           
        }

        console.log(surface(5))

        //EVENEMENTS

        const likes = document.getElementById('likes');
        const btn = document.querySelector('.btn');
        let likesNumber = 0

        btn.addEventListener("click", function() {
            likesNumber++;
            likes.innerHTML = likesNumber;
            this.classList.toggle("pink");
            this.classList.toggle("chartreuse");
        })

        const body = document.querySelector('body');
        const bouton = document.querySelector('.bouton')

        bouton.addEventListener("click", function() {
            body.classList.toggle("white");
            body.classList.toggle("black");
        })

        // Timers

        // Le setTimeout dans cette exemple au bout de 5 secondes (5000ms)
        // la fonction anonyme sera traitée ( le console log envoyé)
        setTimeout(function(){
            console.log("coucou !!")
        }, 5000)

        setInterval(function(){
            console.log("EXTERMINATE !!!")
        }, 2000)

        const lorem = document.getElementById('lorem')
        
        setInterval(function(){
            lorem.classList.toggle("texte");
            lorem.classList.toggle("textes");
        }, 500)


// ici on stock dans des variables les span qui permettront d'afficher les variables d'heures et de minutes
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");

const dring = document.getElementById("dring");
const star = document.getElementById("star");
const inputHours = document.getElementById("unput-hours");
const inputMinutes = document.getElementById("unput-minutes");
const btn = document.getElementById("btn-alarm");


// ici on stock les variables qui afficheront les heures et les minutes ainsi permettre la permutation(switch) apres la 60 ème seconde, pour redevenir 0
let minutesValue = 0;
let hoursValue = 0;

let alarmMinutes = null;
let alarmHours = null;



btn.addEventListener("click", function() {
    if ( inputHours.value >= 0 && inputHours.value <= 24 && inputMinutes.value >= 0 && inputMinutes.value > 60) {
        star.style.display = "inline";
        alarmHours = inputHours.value;
        alarmMinutes = inputMinutes.value;
        // TOUS CE PASSE BIEN !!!
    }else{
        console.error("les valeurs sont invalides")
    }
    inputHours.value = '';
    inputMinutes.value = '';
})



// ici le setInterval va appeler une fonction anonyme qui incrémente de 1 la variables minutes toutes les secondes soit 1000 milisecondes
setInterval(function() {

    minutesValue++; // incrémenter de 1 à chaque 1000ms soit 1 seconde.

    // dans cette con dition quand les minutes atteignent 60 secondes, elle repasse à 0
    if ( minutesValue >= 60) {
        minutesValue = 0;
        hoursValue ++;
    }
    // même chose qu'au dessus mais pour les heures
    if ( hoursValue >= 24) {
        hoursValue = 0;
    }

    if(alarmMinutes != null && alarmHours != null) {
        if (minutesValue >= alarmMinutes && hoursValue >= aalarmHours) {
            dring.classList.toggle("visible")
            star.style.display = "none"
        }
    }
    
    // ici nous avons deux ecritures differentes mais au resultats identiques pour afficher un zero "fictifs" quand les secondes sont entre 0 et 9

    //Ecriture normale
    if ( minutesValue < 10) {
        minutes.innerHTML = "0" + minutesValue;
    }else {
        minutes.innerHTML = minutesValue;
    }

    // ici on injecte les valeurs dans les span pour l'affichage et notre magnifique plaisir

    //Ecriture Ternaire
    //minutes.innerHTML = minutesValue < 10 ? "0" + minutesValue : minutesValue

    hours.innerHTML = hoursValue;

}, 1000);




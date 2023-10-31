const nom = ["Dylan, Steven, Jonathan, Antonin, Johan, Gregory, Raphael, Clarisse, Jerome, Pierre"];

let copyNom = [...nom];

const pInterroger = document.getElementById('p-interroger')
const hangman = document.getElementById('hangman')
const lastSacrified = document.getElementById('last-sacrified')

// Nous crééons la liste des personnes à sacrifier ici.
function updateNom(){ 
    pInterroger.innerHTML = '';
    copyNom.forEach(element => {
    pInterroger.innerHTML += `<li>${nom}</li>`
    });
}


function genNumRand(){
    return Math.floor(Math.random() * copyNom.length)
}

hangman.addEventListener('click', function() {
    if ( copyNom.length === 0) {
        copyNom = [...nom]
        updateNom();
    }
    // On utilise la methode splice
    // le premier argument est l'index de l'élément à enlever
    // le deuxieme est nombre d'élément à enlever à partir de l'index
    let rand = genNumRand()
    lastSacrified.innerHTML = copyNom[rand];
    copyNom.splice(rand, 1);
    updateNom();
   
})

// On update "GRAPHIQUEMENT" la liste pendant le premier chargement de la page
updateNom();
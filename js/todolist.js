const task = document.getElementById("task");
const scroll = document.getElementById("scroll");
const Add = document.getElementById("Add");
const list = document.getElementById("list");



let buffer = "";
let tdlArray = [];
task.value = "";
Add.disabled = true;


function creatList(array) {
    list.innerHTML = "";
    for( i of array) {
        list.innerHTML += `<li class="no-strike">${i}</li>`
    }
}


function addEventToli(liArray) {
    
    for (li of liArray) {
        li.addEventListener("click", function() {
            this.classList.toggle("no-strike");
            this.classList.toggle("strike");
        })
    }

}


function listUpdate() {
    tdlArray.push(buffer)
    task.value = ""; //On vide l'input pour ne pas avoir d'incohérence
    buffer = ""; // On vide le buffer pour éviter les incohérences
    console.log(tdlArray);
    Add.disabled = true;
    creatList(tdlArray);
     let liElements = document.getElementsByTagName("li");
    addEventToli(liElements)
}



task.addEventListener('input', function(event) {
    buffer = event.target.value
    console.log(event.target.value)
    if (event.target.value.length !== 0) {
        Add.disabled = false;
    }else {
        Add.disabled = true;
    }
})

Add.addEventListener('click', function() {
    if ( task.value.length !== 0 ) {
        listUpdate()
       
    }else {
        console.error("Veuillez remplir le champs des tâches.")
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === "Enter" ) {
       if ( task.value.length !== 0 ) {
            listUpdate()
        }else {
            console.error("Veuillez remplir le champs des tâches.")
        }    
    }
    
})

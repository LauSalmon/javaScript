/*
//Ma version (du début)
const add = document.querySelector("#add");
const tasks = document.querySelector("#tasks");
const del = document.querySelector("#delAllTask");
const reload = document.querySelector("#reload");

function addTask() {
    const task = document.querySelector("#task").value;
   if (task != "") {
        const paragraphe = document.createElement("p");
        paragraphe.textContent = task;

        tasks.appendChild(paragraphe);
    }
}

function delAllTask () {
    while(tasks.firstChild){
        tasks.firstChild.remove()
    }
}

function reload () {
    windows.location.reload();
}
*/


//Version corrigé

//récupération de la div (id="tasks")
const tasks = document.querySelector('#tasks');
//function addTask
function addTask(){
    //récupération de la valeur saisie dans l'input task
    const task = document.getElementById('task').value;
    if(task!=""){
        //créer une div
        const container = document.createElement('div');
        //ajouter une classe
        container.setAttribute('class', 'container');
        //créer les 2 boutons
        const btDel = document.createElement('button');
        //ajouter id au bouton
        btDel.setAttribute('id', 'delete');
        //ajout du texte du bouton
        btDel.textContent = "Delete";
        //ajouter le onclick au bouton
        btDel.setAttribute('onclick', "deleteTask(this)");
        //créer le bouton update
        const btUpdate = document.createElement('button');
        //ajouter un id au bouton
        btUpdate.setAttribute('id', 'update');
        //ajout du texte du bouton
        btUpdate.textContent = "Update";
        //ajouter la fonction updateTask au bouton
        btUpdate.setAttribute('onclick', 'updateTask(this)');
        //créer un paragraphe
        const paragraphe = document.createElement('p');
        //ajouter la valeur de l'input au nouveau paragraphe
        paragraphe.textContent = task;
        //ajouter les enfants à la div (id="container")
        container.appendChild(paragraphe);
        container.appendChild(btDel);
        container.appendChild(btUpdate);
        //ajouter container à la div tasks
        tasks.appendChild(container);
    }
}
function delAllTask(){
    //boucle pour parcourir le premier enfant
    while(tasks.firstChild){
        //supprimer le premier enfant
        tasks.firstChild.remove();
    }
}
function reload(){
    //alternative
    //window.location.reload();
    //version raccourci
    location.reload();
}
//fonction supprimer une tache
function deleteTask(e) {
    //récupére le bouton-> passe au parent et on supprime le parent
    e.parentNode.remove();
}
//fonction pour mettre à jour une tache
function updateTask(e){
    //récupérer la valeur de task (input)
    const task = document.querySelector('#task').value;
    if(task!=""){
        //mise à jour du paragraphe
        e.parentNode.firstChild.textContent = task;
    }
}


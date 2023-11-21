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
let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}
// calculer la moyenne de notes et l'afficher dans la console 

function moyenne(notes){
   let somme = 0;
   for (element of notes){
      somme += element;
   }
   return somme/notes.length;
}


console.log(moyenne(notes));
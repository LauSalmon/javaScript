/*
Ecrire un programme qui demande l’âge d’un enfant à l’utilisateur (prompt). Ensuite, il l’informe de sa catégorie (console.log) : 
           -"Poussin" de 6 à 7 ans
           -"Pupille" de 8 à 9 ans
           -"Minime" de 10 à 11 ans
           -"Cadet" après 12 ans
           -"Hors catégorie ou trop jeune" si inférieur à 6 ans
*/

let age = parseInt(prompt("Saisir l'age de votre enfant"));

function demande (a){
    if (a>=6 && a<=7){
        console.log("Poussin");
    } else if (a>=8 && a<=9){
        console.log("Pupille");
    } else if (a>=10 && a<=11){
        console.log("Minime");
    } else if (a>=10){
        console.log("Cadet");
    } else {
        console.log("Hors catégorie ou trop jeune");
    }
}

demande(age);
let users =[];
let ages =[];
// boucle avec les  demande d'info
for (let i=0; i<3; i++){
    let user = {
    nom : prompt("Saisir votre nom"),
    prenom : prompt("Saisir votre prénom"),
    age : parseInt(prompt("Saisir votre age")),
    }
users.push(user);
ages.push(user.age);
}

let jeune = Math.min(...ages);

console.log(jeune);

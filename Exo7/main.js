let users =[];

// boucle avec les  5 utilisateurs
for (let i=0; i<5; i++){
    //création du  tableau associatif
    const user = {
    nom : prompt("Saisir votre nom" + (i+1)),
    prenom : prompt("Saisir votre prénom"+ (i+1)),
    age : parseInt(prompt("Saisir votre age"+ (i+1))),
    }
users.push(user);
}

//stocker l'age minimum
let jeune = users[0].age; // age est dans un tableau associatif qui est lui-meme dans un tableau indexé

//stocker l'indice
let indice =0;
// boucle pour parcourir le tableau users
for (let i=0; i<users.length; i++) {
    if (users[i].age < jeune){
        jeune = user[i].age;
        indice = i;
    }
}

console.log(`L'utilisateur :  ${users[indice].nom} ${users[indice].prenom} est le plus jeune`);

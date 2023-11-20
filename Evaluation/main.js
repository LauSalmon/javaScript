const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

//Création tableau
const tabData = [];

//Ajout des constantes dans le tableau
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

console.log(tabData);

function afficherHumain(objet) {
    for (let i=0; i<3; i++) {
        console.log("Nom : "+tabData[0][i].name);
        console.log("email : "+tabData[0][i].email);
        console.log("age : "+tabData[0][i].age + " ans");
    }
}

//afficherHumain(usersHuman);

function afficherAnimal(objet) {
    for (let i=0; i<2; i++) {
        console.log("nom : "+tabData[1][i].name);
        console.log("espece : "+tabData[1][i].espece);
        console.log("age : "+tabData[1][i].age + " ans");
        console.log("propriétaire : "+tabData[1][i].propriétaire);
    }
}
//afficherAnimal(usersHuman);

function afficherXeno(objet){
    for (let i=0; i<3; i++){
        console.log("nom : "+tabData[2][i].name);
        console.log("espece : "+tabData[2][i].espece);
        console.log("age : "+tabData[2][i].age + " ans");
        console.log("propriètaire : "+tabData[2][i].menace);
    }
}

//afficherXeno(usersXeno);

function profil(array){
    for (let i=0; i<array.length; i++){
        if (array[i].type == "humain") {
            afficherHuman(objet);
        } else if (array[i].type == "animal de compagnie"){
            affichetAnimal(objet);
        } else if (array[i].type == "Xeno"){
            affichetXeno(objet);
        }else {
            console.log("Type de profil non Existant");
        }
    }
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);


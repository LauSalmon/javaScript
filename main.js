//Déclarer les constantes
const s_nom = document.getElementById("name");
const s_prenom = document.getElementById("firstname");
const s_mail = document.getElementById("email");

let nom = s_nom.value;
let prenom = s_prenom.value;
let mail = s_mail.value;



//Faire un evenement au click sur la sourie
const array = document.querySelector("#bt");
array.addEventListener("click", function() {
    let tab= [nom,prenom,mail];
    console.log(tab);
})




let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));

//afficher dans la console si le produit est négatif

function multip(a, b){
    if (a<0 && b<0 || a>0 && b>0){
        console.log("Le résultat est positif");
    } else {
        console.log("Le résultat est négatif");
    }
}

multip(nombre1,nombre2);
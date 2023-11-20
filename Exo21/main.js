
//let qtt = parseInt(prompt("Combien de chocolatines sont achetés ?"));

let choco = 0;

//boucle pour définir le prix des choco à l'unité

//console.log((qtt*choco).toFixed(2) + "€");


function calculer() {
    let quantite = document.querySelector("#quantite").value;
    const prix = document.querySelector("#resultat");
    for (i=0; i<quantite; i++){
    if (quantite>1 && quantite<=10){
        choco = 1.40;
    } else if (quantite>10 && quantite <=20){
        choco = 1.30;
    } else if (quantite>20) {
        choco = 1.20;
    }
    }
    if (quantite>0) {
        prix.innerText = (quantite*choco).toFixed(2) + "€";
    }else if (quantite = " " || quantite == 0){
        prix.innerText = "Veuillez choisir un nombre de chocolatines .";
    } 
}


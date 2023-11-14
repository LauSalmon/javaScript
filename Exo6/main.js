let name = prompt("Saisir le nom de l'article");
let price = prompt("Saisir leprix de l'article (HT)");
let qtt = prompt("Saisir la quantité d'article que vous souhaitez");

let array = [name, price, qtt];

let tva = 1.20;

console.log("Vous avez acheté "+array[2]+" "+ array[0] +"(s), pour un total de "+array[1]*tva*array[2] +"€");
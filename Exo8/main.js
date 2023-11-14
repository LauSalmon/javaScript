let how = prompt("Saisir le nombre de valeur");

let array =[];

for (let i=0; i<how; i++) {
    let number = parseInt(prompt("saisir une note "));
    array.push(number);
}

let positive = 0;
let negative = 0;
let big = 0;

for (let j=0; j<how; j++) {
    if (array[j] > 0) {
        positive ++;
        if (array[j]> big){
            big = array[j];
        }
    } else {
        negative ++;
    }
}

console.log("Nombre de valeur positives :" + positive);
console.log("Nombre de valeur negatives :" + negative);
console.log(big + " est la valeur la plus grande");
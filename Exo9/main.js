
let qtt = parseInt(prompt("Combien de chocolatines sont achetés ?"));

let choco = 0;

for (i=0; i<qtt; i++){
    if (qtt>1 && qtt<=10){
        choco = 1.40;
    } else if (qtt>10 && qtt <=20){
        choco = 1.30;
    } else {
        choco = 1.20;
    }
}

console.log(qtt*choco + "€");
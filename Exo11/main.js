function chooseNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


let scoreB = 0;
let scoreJ= 0;


for (let i=0; i<5; i++) {
    let diceB = chooseNumber(1,6); // dé banque
    let diceJ = chooseNumber(1,6); // dé joueur
    if (diceB > diceJ) {
        scoreB ++;
    } else if (diceJ == diceB) {
        scoreJ += 2;
    } else {
        scoreJ ++;
    }
}

if (scoreB > scoreJ){
    console.log("La Banque à gagné avec " + scoreB + " points.");
} else {
    console.log("Le Joueur à gangé avec " + scoreJ + " points.");
}
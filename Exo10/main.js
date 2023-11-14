
function chooseNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let mysteryNumber = chooseNumber(1,100);

let numberOfTries = 1;

function play() {
    let gameNotFinished = true;
    while (gameNotFinished) {
    let guess = parseInt(prompt("Quelle valeur propose le mentaliste ?"));
    if (numberOfTries<10 && guess == mysteryNumber) {
        console.log("Son entrainement acharné a payé, il a trouvé en "+numberOfTries +" essais !");
        gameNotFinished = false;
    } else if (numberOfTries<10 && guess < mysteryNumber) {
        console.log("Trop petit !");
         numberOfTries ++;
    }else if (numberOfTries<10 && guess > mysteryNumber) {
        console.log("Trop grand !");
        numberOfTries ++;
    } else if (numberOfTries == 10){
        console.log("Il est un mauvais mentaliste et il va devoir changer de métier")
        gameNotFinished = false;
    }
    }
}
play();

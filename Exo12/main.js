let number = parseInt(prompt("Vous voudiez connaitre quelle table de multiplication ?"));

console.log("Table de " + number + " :");

for (let i=0; i<11; i++) {
    console.log(number + " x " + i + " = " + (number*i));
}
class Animal {
    espece;
    nbPattes;
    taille;
    poid;
    constructor (newEspece, newNbPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbPattes = newNbPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    crier() {
        if (this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Roarrr");
        }
        if (this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaouu");
        }
        if (this.espece == "Chien" || this.espece == "chien") {
            console.log("Wouuuuf");
        }
        if (this.espece == "Coq" || this.espece == "coq") {
            console.log("Cot, Coooot");
        }
    }
    dormir (){
        console.log("Zzzzzz");
    }
}

const tigre = new Animal ("Tigre", 4, 100, 200);
const chat = new Animal ("Chat", 4, 30, 4);
const chien = new Animal ("Chien", 4, 50,9);
const coq = new Animal ("Coq", 2, 40,3);

console.log(tigre);
console.log(chat);
console.log(chien);
console.log(coq);

tigre.crier();
chat.crier();
chien.crier();
coq.crier();

tigre.dormir();
chat.dormir();
chien.dormir();
coq.dormir();
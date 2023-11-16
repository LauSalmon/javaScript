class IMC {
    constructor (nom, poid, taille) {
        this.nom = nom;
        this.poid = poid;
        this.taille = taille;
    }
    calcul(){
        return this.poid/(this.taille**2);
    }
    display() {
        console.log(this.nom + " mesure " + this.taille + "m et pèse " + this.poid + "kg donc son IMC est de " + this.calcul().toFixed(2));
    }
}

let imc = new IMC ("Jade", 60, 1.65);

//Tableau
let list =[];
list.push(new IMC("Jade", 60, 1.65));
list.push(new IMC("Oliver", 75, 1.70));
list.push(new IMC("Marco", 80, 1.80));
//Parcours de la liste
list.forEach((element)=>{
 element.display();
});

for (let i=0; i<list.length; i++) {
list[i].display();
}


imc.display();


//list.push(new IMC("Jade", 60, 1.65));
console.log(list);
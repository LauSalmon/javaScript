class IMC {
    constructor (nom, poid, taille) {
        this.nom = nom;
        this.poid = poid;
        this.taille = taille;
    }
    calcul(){
        return this.poid/((this.taille*this.taille));
    }
    display() {
        console.log(this.nom + " mesure " + this.taille + "m et pèse " + this.poid + "kg donc son IMC est de " + this.calcul().toFixed(2));
    }
}

let imc = new IMC ("Jade", 60, 1.65);

imc.display();
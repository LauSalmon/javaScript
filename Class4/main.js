// Exercice 15

class Vehicule {
    constructor (nom, nbRoues, vitesse, couleur = "rose"){
        this.nom = nom,
        this.couleur = couleur;
        this.nbRoues = nbRoues;
        this.vitesse = vitesse;
    }
    detect() {
        if (this.nbRoues == 4) {
            return "Voiture";
        } else if (this.nbRoues == 2){
            return "Moto";
        } else {
            return "Autre vehicule";
        }
    }
    boost() {
        this.vitess += 50;
    }
    plusRapide(objet) {
        if (this.vitesse > objet.vitesse) {
            return "Le vehicule le plus rapide est : "+ this.nom;
        } else if (this.vitesse < objet.vitesse) {
            return "Le vehicule le plus rapide est : "+ objet.nom;
        } else {
            return "Les 2 vehicules ont le meme vitesse";
        }
    }
}

//Instancier 2 objets vehicule
const voiture = new Vehicule ("Mercedes CLK", 4, 250);
const moto = new Vehicule ("Honda CBR", 2, 280);

//Utilisation de la méthode detect()
console.log("Le type de vehicule de " + voiture.nom + " est " +voiture.detect());
console.log("Le type de vehicule de " + moto.nom + " est " + moto.detect());

// Utilisation de la méthode boost() sur la voiture
voiture.boost();
console.log ("La nouvelle vitesse de la voiture est : " + voiture.vitesse + " km/h.");

console.log(voiture.plusRapide(moto));


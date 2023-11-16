
class Personnage {
    constructor (nom, force, defense, vie) {
        this.nom = nom;
        this.force = force;
        this.defense = defense;
        this.vie = vie;
    }
    attaquer(objet) {
        return objet.vie = objet.vie-(this.force-objet.defense);
    }
}

class Combat {
    constructor (nbTour, joueur1, joueur2) {
        this.nbTour = nbTour;
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
    }
    start() {
        for (let i=this.nbTour; i>0; i--) {
            this.joueur1.attaquer(this.joueur2);
            this.joueur2.attaquer(this.joueur1);
            if (this.joueur1.vie <=0){
                return this.joueur2.nom + " a gagné";
            } else if (this.joueur2.vie <= 0){
                return this.joueur1.nom + " a gagné";
            }
        }
        if (this.joueur1.vie >0 && this.joueur2.vie >0){
            return "Match nul !";
        }
    }
}


const j1 = new Personnage ("Pomme",8, 5, 30);
const j2 = new Personnage ("Code", 5, 2, 40);

const combat = new Combat (12, j1, j2);

console.log(combat.start());



/*    start(){
        for (let i=0; i<this.nbTour; i++){
            this.joueur1.attaquer(joueur2);
            this.joueur2.attaquer(joueur1);
        if (this.joueur1 < this.joueur2){
            console.log(this.joueur1 + " a perdu ! "+ this.joueur2 + " est le gagnant.");
            break; 
        } else if (this.joueur2 < this.joueur1) {
            console.log(this.joueur2 + " a perdu ! "+ this.joueur1 + " est le gagnant.");
            break;
        } else if (this.joueur1 == this.joueur2) {
            console.log("Match nul !");
        }
    }*/
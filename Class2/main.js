class Maison {
    constructor (nom, longueur, largeur){
        this.nom = nom;
        this.longueur = longueur;
        this.largeur = largeur;
    }
    perimetre(){
        console.log(((this.longueur+this.largeur)*2)+ " m");
    }
    surface(){
        console.log((this.longueur*this.largeur)+ " m²");
    }
    surfaceEtage(){
        console.log((this.longueur*this.largeur)*3);
    }
}

let maison = new Maison ("Campagnarde", 30, 40);

maison.perimetre();
maison.surface();

maison.nbEtage = 3;

maison.surfaceEtage();
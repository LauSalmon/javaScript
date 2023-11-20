const N = 12;
const XXX = 1.10;

class Salarie {
    salaireAnnuel = 0;
    constructor (nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
    calculSalaire(){
        this.salaireAnnuel = this.salaire*XXX*N;
    }
}

class Pme {
    solde = 0;
    salaires = 0;
    constructor (revenue, fraisFixe, fraisAchat, equipe) {
        this.revenue =revenue;
        this.fraisFixe = fraisFixe;
        this.fraisAchat = fraisAchat;
        this.equipe = equipe;
    }
    bilan(){
        //calcul du montant de slaires des employés
        this.equipe.forEach(element => {
            this.slaires += element.calculSalaire();
        });
        this.solde = this.revenue-this.fraisFixe-this.fraisAchat-this.salaires;
        return this.solde;
    }
}

//Ajout 3 salairés
const bob = new Salarie ("bob", "bob", 25, 2000);
const pomme = new Salarie ("Pomme", "Pomme", 22, 3000);
const richas = new Salarie ("Richas", "Richas", 28, 4000);

let tab = [];
tab.push(bob);
tab.push(pomme);
tab.push(richas);

//créer une entreprise
const quesadilla = new Pme (300000, 20000, 50000, tab);

console.log("il reste à l'entreprise : "+ quesadilla.bilan()+ " €." )
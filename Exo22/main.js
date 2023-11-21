

/*let articles3 = {
	
    "nom":prompt("Saisir le nom de l'article"),
    "prixHt": parseFloat(prompt("Saisir le prix HT de l'article")),
    "quantite": parseInt(prompt("Saisir la quantité de l'article"))
}*/

function calculer() {
	let prix = parseInt(document.querySelector("#prixHT").value);
	let qtt = parseInt(document.querySelector("#quantite").value);
	const result = document.querySelector("#resultat");

	//articles3.prixTtc = (articles3.prixHt*articles3.quantite*1.20).toFixed(2);
	//console.log()

	prixTtc = (prix*qtt*1.20).toFixed(2);

	result.textContent = `Le prix TTC de est égal à ${prixTtc} €`

}
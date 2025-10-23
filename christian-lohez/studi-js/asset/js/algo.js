/**
 * Résumé de la Demande:
 * entrées user via prompt => notes sur 100
 * Stocker les entrées de manières temporaire => Tableau[]
 * Contrôle de répétitions de saisie
 * Sortie moyenne des notes sur 20


function getAverage(){
    let arrayNotes = [];
    let response;
    let note = prompt("Veuillez entrez une note sur 100")

    while(response !== "non"){
        if(note){
            let noteInt = parseInt(note);
            arrayNotes.push(noteInt);
            response = prompt("Voulez-vous entrer d'autres notes? (OUI / NON")
        }
    }
    let sum = arrayNotes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ;
    }, 0)

    //Le résultat divisé par 5 pour avoir une moyenne sur 20
    let average = (sum / arrayNotes.length)/ 5 
    return average;
}

alert(getAverage())



//Fonction pour calculer le carré d'un nombre
function calculatrice(){
    let nombre = parseFloat(prompt("Entrez un nombre"));
    let carre = nombre * nombre;

    console.log(`Le carré est dee ${nombre} est: ${carre}`)
}
calculatrice()
 */

//Fonction pour calculer la somme d'un nombre
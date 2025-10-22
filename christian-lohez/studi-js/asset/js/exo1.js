//Récupération de l'Age du visiteur
let ageOfVisitor= parseInt(prompt("Entrez l'âge du visiteur..."));

if(ageOfVisitor< 5){
    console.log("Prix Bambin! c'est gratuit")
}else if ((ageOfVisitor>= 5) & (ageOfVisitor<= 12)){
    console.log("Prix enfant c'est: 6€")
}else{
    console.log("Prix Adulte c'est: 12€")
}
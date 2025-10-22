//Initialisation
let notes = [], note;

//Boucle de saisie
while( note = parseFloat(prompt("Note sur 100:") !== null)){
   
    if(!isNaN(note) && note >= 0 && note <= 100){
        notes.push(note)
    }
}
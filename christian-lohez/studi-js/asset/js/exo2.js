//Initialisaation des variables

function moyenneSimple() {
    let notes = [];
    let note;
    
    while ((note = prompt("Notes sur 100 :")) !== null) {
        note = parseFloat(note);
        if (!isNaN(note) && note >= 0 && note <= 100) {
            notes.push(note);
        }
    }
    
    if (notes.length > 0) {
        const moyenne20 = (notes.reduce((a, b) => a + b) / notes.length) * 0.2;
        alert(`Moyenne : ${moyenne20.toFixed(2)}/20`);
    }
}

moyenneSimple();


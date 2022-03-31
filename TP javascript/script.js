
// let choix1 = window.prompt('Choisir une première couleur parmis ces 3: rouge, bleu ou jaune');
// document.write(`votre premier choix est ${choix1}  <br>`)


// let choix2 = window.prompt('Choisir une seconde couleur différente parmis ces 3: rouge, bleu ou jaune');
// document.write(`votre deuxième choix est ${choix2}  <br>`)


// let choix3 = window.alert('Etes-vous sûr d\'avoir choisi une couleur différente');




// if(choix1 == 'jaune' && choix2 == 'bleu'|| choix2 == 'jaune' && choix1 == 'bleu'){
//     document.write('La couleur obtenue est verte <br>')
// }
// else if(choix1 == 'rouge' && choix2 == 'bleu' || choix2 == 'rouge' && choix1 == 'bleu' ){
//     document.write('La couleur obtenue est violet <br>')
// }

// else{
//     document.write('La couleur obtenue est orange <br>')
// }


//correction
//première couleur
let couleur1 = window.prompt("Saisir une première couleur parmi : bleu,jaune ou rouge");

//deuxième couleur
let couleur2 = window.prompt("Saisir une deuxième couleur parmi : bleu,jaune ou rouge");

let melange;
if((couleur1 == 'jaune' && couleur2 == 'bleu') || (couleur2 == 'jaune' && couleur1 == 'bleu')){
    melange = 'vert';
}
else if((couleur1 == 'rouge' && couleur2 == 'jaune') || (couleur1 == 'jaune' && couleur1 == 'rouge')){
    melange = 'vert';
}

else{
    melange = 'violet'
}

document.write(`${couleur1} et ${couleur2} donnent ${melange}`)

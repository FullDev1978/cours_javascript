
let choix1 = window.prompt('Choisir une première couleur parmis ces 3: rouge, bleu ou jaune');
document.write(`votre premier choix est ${choix1}  <br>`)


let choix2 = window.prompt('Choisir une seconde couleur différente parmis ces 3: rouge, bleu ou jaune');
document.write(`votre deuxième choix est ${choix2}  <br>`)


let choix3 = window.alert('Etes-vous sûr d\'avoir choisi une couleur différente');


// let choix3 = window.alert(`La couleur doit être différente ${ choix1 != choix2} `)
//     document.write('Vous devez renseigner des couleurs différentes <br>')



if(choix1 == 'jaune' && choix2 == 'bleu'|| choix2 == 'jaune' && choix1 == 'bleu'){
    document.write('La couleur obtenue est verte <br>')
}
else if(choix1 == 'rouge' && choix2 == 'bleu' || choix2 == 'rouge' && choix1 == 'bleu' ){
    document.write('La couleur obtenue est violet <br>')
}

else{
    document.write('La couleur obtenue est orange <br>')
}








let perso = document.querySelector('#personnage');
document.addEventListener('keydown', anime);
function anime (event){

    console.log(event);

    perso.style['animation'] = 'marche 0.7s steps(3) infinite';

    switch(event.keyCode){
        case 38:
        case 90:
        perso.style['background-position-y'] = '-100px';
        break;

        case 40:
        case 83:
        perso.style['background-position-y'] = '-150px';
        break;

        case 39:
        case 68:
        perso.style['background-position-y'] = '0';
        break;
        case 37:
        case 81:
        perso.style['background-position-y'] = '-50px';
        break;
        
        
        
        }

}
/*haut 38/90
bas 40/83
droite 39/68
gauche 37/81
*/


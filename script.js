/*document est un onjet qui symbolise la partie affichée (body)
document à une méthode write() permettant d'écrire le document*/
document.write('Hello');
document.write('<h2>Entrainement Javascript</h2>');/*on termine les instructions par ;*/

/*la consome est objet destiné à debuguer et permet de suivre son script*/
console.log('coucou');
console.info('message');/* comme log, affiche sur firefox affiche (i) d'information*/

//window.alert('bouh')  alerte
//window.prompt('entrez une valeur'); question avec réponse
//window.confirm('Etes vous sûr'); attente confirmation (ok,annuler)
document.write('<h2>Variables / déclaration / affectation<h2>');

var maBoite; //déclaration en forme d'écriture en camelcase

maBoite = 10; //Affectation

document.write(maBoite); // Affichage

let maBoite2 = 'texte'; //déclaration/affectation
document.write('<br>');
document.write(maBoite2);

let prenom='Anthony', nom='Lucher';// déclarations multiples

// Concaténation
document.write("<br>Je m'applelle") // guillemet cette fois ci à cause de la quote mais possible antislash
document.write("<br>Je m'appelle " + prenom + ' ' + nom + '<br>');
//le + est le symbole de concaténation
//il se comporte tel quel si un des éléments est une chaîne de caractère

//Alternative à la concaténation, utilisation des backquotes (backticks)
//``
document.write(`<br>Je m'apelle ${prenom} ${nom}`); //les variables sont identifiées avce l'écriture ${}

//concaténation à l'affectation
let fruit = 'pomme';
// fruit = fraise on remplace par une nouvelle valeur mais si += concaténation
fruit += 'fraise';

console.log(fruit);
//créer une variable ville, et afficher 'Je réside dans la ville de ...'

let maVille = 'Marseille';
document.write(`<br>Je réside dans la villle de ${maVille}`);

document.write('<h2>Types de données</h2>');

let chiffre = 5;
console.log(typeof(chiffre));// number
let duTexte = 'du texte';
console.log(typeof(duTexte));// string
let unBooleen = true;
console.log(typeof(unBooleen)); // booléen

let numero = 0;
document.write(Boolean(numero));// La valeur booléene de 0 est false
numero = 6
document.write('<br>' + Boolean(numero)); // la valeur booléene des autres chiffres est true

console.log(5>2);// booléen qui indique le résultat de la comparaison
console.log(10<3);

document.write('<h2>Les constantes</h2>');
//const permet de déclarer une constante et par convention est écrite en majuscules
const URL = 'https://monsite.com';
//URL - 'autre chose'; ERREUR car url est constant et ne peut être modifié
document.write(`Mon URL est ${URL}`);

document.write('<h2>Opérateurs arithmétiques</h2>');
document.write(10+5+'<br>');
//addition concaténation
// le plus est l'opérateur d'addition si j'ai affaire à 2 nommbres (number)
document.write(10*5+'<br>');
document.write(10/5+'<br>');
document.write(10%5+'<br>');//modulo : reste de la divion entière
document.write(10**2+'<br>');//10²

let chiffre1 = 10, chiffre2 = 3;
let resultat = chiffre1 + chiffre2;
document.write(`${chiffre1}+${chiffre2}=${resultat}`);

//parseFloat() et parseInt () sont des fonctions qui vont forcer un float ou en int (integer) des chaines de caractères dont la première est numérique
//let nombre1 = parseFloat(window.prompt('Entrez un premier nombre'));
//let nombre2 = parseFloat(window.prompt('Entrez un deuxième nombre'));
//document.write(`<br> Vous avez saisi ${nombre1} et ${nombre2}, Voici la somme : ${nombre1+nombre2}`);
console.log(parseInt('256€'));
console.log(parseInt('1200px'));
console.log(parseInt('32.68'));
console.log(parseFloat('32.68€'));


document.write('<h2>Structures conditionnelles</h2>');

let a = 10, b = 5 , c = 2;
//stucture if/else
//Boulean

if(a > b)//si le Boulean est VRAI
{
    document.write('a est supérieur à b<br>');
}
else{// sinon le boulean est faux
    document.write("a n'est pas supérieur à b<br>");
}

//plusieurs conditions
// ET
if ( a > b && b > c){
    document.write('OK pour les deux conditions<br>')
}
/*
FAUX && FAUX => FAUX
FAUX && VRAI => FAUX
VRAI && VRAI => VRAI*/

// ou : || double égale (comparer)

if(a == 9 || b > c) {
    document.write('OK pour au moins une des conditions<br>');
}
// ou exclusif (simulé)
//! => NOT
if ( ((a == 9) && !(b>c)) || ( !(a == 9) && (b>c))){
 document.write('Une des  conditions seulement doit être vrai<br>');
}

/*
FAUX || FAUX => FAUX
FAUX || VRAI => VRAI
VRAI || VRAI => VRAI (OU INCLUSIF)
VRAI  VRAI => FAUX ( OU EXCLUSIF) */

//utilisation du != (not equal)
if( a != 8){
    document.write('a est différent de 8<br>');
}
if (!(a == 8)) { //c'est vrai que c'est faux a vaut 8
    document.write('a est différent de 8<br>');

}
/*on utilise cette écriture quand on veut exécuter du quand une condition est fausse*/

let test = a > 10;
console.log(test);
//vrai
if(!test){
    document.write("c'est vrai que a n'est pas supérieur à 10 <br>");
}

let age = 14;

if(!(age>=18)) {
    document.write('tu ne rentres pas<br>');
}

age += 2;// age vaut 16 age = age +2
console.log(age);

age -= 3; //age vaut 13 age = age -3

age += 1 ;
age ++;// incrémentation de 1 (15)
age --;// incrémentation de 1 (14)
console.log(age);
//number , string
let varA = 1, varB = '1';
if (varA == varB){
    console.log("C'est la même chose");
}
//les variable sont égales en VALEUR

//comparaison valeur et type
if(varA === varB){
    console.log("C'est la même chose");
}

//autre exemple 0 et false sont idenditque en valeur mais pas en type
if( 0 == false){
// Ne s'affiche pas car 0 est un number et false un boulean
    console.log("C'est la même chose");
}


//Stucture if/else if/else
if(a == 8){
    document.write('Cas 1 : vaut 8<br>');
}
else if(a != 10 ){
    document.write('Cas 2 : a est fifférent de 10<br>')
}

else {
    document.write('Cas 3 : tout le monde a faux<br>');
}

//structure switch ( fonctionne si la variable comparée est toujours la même et qu'on la compare à différentes valeurs)

let couleur = 'jaune';

switch(couleur){
    case 'bleu': console.log('vous aimez le bleu');break;

//traiter 2 cas de maniètes identique
    case 'carmin':
    case 'rouge': console.log('vous aimez le rouge');break;

    case 'vert': console.log('vous aimez le vert');break;
    default: console.log("Vous n'aimez aucune de nos couleurs disponibles (bleu,rouge,vert)");
}

// Exercice : retranscrire ceci avec if/else if/else
/*let couleur2 = 'bleu'
let couleur3 = 'rouge'
let couleur4 = 'vert'

if(couleur != couleur2){
    document.write('Cas 1 vaut : vous aimez le bleu <br>');
}
else if(couleur != couleur3){
    document.write('Cas 2 vaut : vous aimez le rouge<br>');
}
else if(couleur != couleur4){
    document.write('Cas 3 vaut : vous aimez le vert<br>');
}
else {
    document.write('Cas 4 vaut : vous aimez le jaune<br>');
}*/

// is NaN() is not number
// !is NaN() Not is Not a Number => is a number

let nombre3 = 10;
if(!isNaN(nombre3)){
    document.write("C'est bien un nombre! <br>")
}

if(typeof(nombre3) == 'number'){
    document.write("C'est bien un nombre! <br>")
}















//selection naturelle (id) à éviter confusion possible avec une variable du même nom

let monElement = masection;// ol cible dontl'id est masection
console.log(monElement);
// selection par ID
monElement = document.getElementById('masection');
console.log(monElement);

monElement.style.border = '1px solid black';
//document.getElementById ('masection).style.border = '1px solid black';
monElement.style.fontSize = '10px';
monElement.style['font-size'] = '15px';
monElement.style.padding = '10px';

console.log(monElement.innerHTML);//contenu balises html comprises
console.log(monElement.innerText);//contenu sans balises

monElement.innerHTML = 'Bonjour <strong> tout monde</strong>' + monElement.innerHTML;

//selection par balises

let mesParagraphes = document.getElementsByTagName('p');

console.log(mesParagraphes);

for (let i = 0; i < mesParagraphes.length; i++) {
    mesParagraphes[i].style.color = 'red';
}

mesParagraphes[2].style.color = 'green';

// Selection par classes
let mesClasses = document.getElementsByClassName('avion');
console.log(mesClasses);

for (let i = 0; i < mesClasses.length; i++) {
    // mesClasses[i].style.border= "1px dotted orange";
    // mesClasses[i].style.marginBottom = "5px";

    // Première méthode pour affecter plusieurs propriétés css à la fois à un élément
    Object.assign(mesClasses[i].style, {
        'border': '1px dotted orange',
        'margin-bottom': '5px'
    });

}

// Deuxième méthode : ajouter une méthode au prototype
Object.prototype.multipleCss = function (elements) {
    // for/in
    for (let k in elements) {
        // this désigne l'élement qui execute la méthode multipleCss
        this.style[k] = elements[k];
    }
}

mesParagraphes[0].multipleCss({
    'border': '1px solid green',
    'padding': '5px',
    'background': 'orange'
});

for (let m = 0; m < mesClasses.length; m++) {

    // mesClasses[m].multipleCss({
    //     'background': 'yellow',
    //     'font-style' : 'italic'
    // });

    Object.assign( mesClasses[m].style,{
        'background': 'yellow',
        'font-style' : 'italic'
    })
}
//information elementwindow
console.log(`Résolution: ${window.innerwidth}x${window.innerHeight}`);

//if(window)

//information geolocalisation
navigator.geolocation.getCurrentPosition(function(infos){
    console.log(infos);
    console.log(infos.coords.latitude);
    });


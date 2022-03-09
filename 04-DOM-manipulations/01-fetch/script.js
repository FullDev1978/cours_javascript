const URLAPI = 'https://apicarto.ign.fr/api/codes-postaux/communes/';
let code_postal = document.getElementById('code_postal');
//let code_postal = document.querySelector('#code_postal');

code_postal.addEventListener('input',function(){

    let codesaisi = this.value;
    let pattern = /^[0-9]{5}$/;
   

    if(codesaisi.match(pattern)){
        console.log('ok');
    fetch(URLAPI + codesaisi)
    .then(function(reponse){
        console.log(reponse);
        if(reponse.status == 200){
            return reponse.json();//formatage de la reponse pour obtenir les données au format
        }
    })
.then (function(donnees){
    console.log(donnees);
    let options = ' ';
    for(let i in donnees){
        options += `<option value="${donnees[i].codePostal} ${donnees[i].nomCommune}">`
    }
    console.log(options);
    document.getElementById('villes').innerHTML = options;
})
    .catch(function(eror){
        console.log(error);
    });
    }
});
document.querySelector('#avatar').addEventListener('change',function(event){
console.log(event);
let fichiers = event.target.files;
console.log(fichiers);
//on créé un lecteur de fichier
let reader = new FileReader();

reader.readAsDataURL(fichiers[0]);

reader.onload = function(e){
    console.log(e);
    document.querySelector('#preview').setAttribute('src',e.target.result);
};

});
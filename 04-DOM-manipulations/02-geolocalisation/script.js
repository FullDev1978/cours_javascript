navigator.geolocation.getCurrentPosition(function(infos){

console.log(infos);
let latitude = infos.coords.latitude;
let longitude = infos.coords.longitude;
let zoom = 12;
//L est l'objet leaflet de la librairie qu'on a intégré sur le html
let maCarte = L.map(document.getElementById('map')).setView([latitude,longitude],zoom);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    minZoom:1,
    maxzoom:20,
    attribution: '&copy; JS Power'
}).addTo(maCarte);

L.marker([latitude,longitude]).addTo(maCarte);

});
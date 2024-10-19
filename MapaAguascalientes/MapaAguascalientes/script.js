// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes

// Añadir capa de OpenStreetMap
var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([21.88234, -102.28259]);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.");

var plazaPatria = L.marker([21.88187, -102.29495]);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

var museoMuerte = L.marker([21.88417, -102.28878]);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

var parqueTresCenturias = L.marker([21.8769, -102.3001]);
parqueTresCenturias.bindPopup("<b>Parque Tres Centurias</b><br>Un lugar emblemático de Aguascalientes.");

var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
});
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes");

var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

var baseMaps = {
"Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}/{v}.png')
};
var overlayMaps = {
 "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte,parqueTresCenturias]),
 "Feria de San Marcos": feriaSanMarcos,
 "Centro Histórico": centroHistorico
};
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Crear iconos personalizados
var customIcon = L.icon({
    iconUrl: 'img/plaza-patria.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50],
});

var customIcon2 = L.icon({
    iconUrl: 'img/Museo-Nacional-de-la-muerte.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50],
});

var customIcon3 = L.icon({
    iconUrl: 'img/Aguascalientes.webp',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50],
});

var customIcon4 = L.icon({
    iconUrl: 'img/FeriaNacional.webp',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50],
});

var customIcon5 = L.icon({
    iconUrl: 'img/Parque-Tres-Centurias.jpg', 
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50],
});

var marker = L.marker([21.88234, -102.28259], {icon: customIcon3}).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br><img src='img/Aguascalientes.webp' width='200px'><br>Capital del Estado.");

var parqueTresCenturias = L.marker([21.8769, -102.3001], {icon: customIcon5}).addTo(map);
parqueTresCenturias.bindPopup("<b>Parque Tres Centurias</b><br><img src='img/parque-tres-centurias.jpg' width='200px'><br>Un lugar emblemático de Aguascalientes.");

var plazaPatria = L.marker([21.88187, -102.29495], {icon: customIcon}).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br><img src='img/plaza-patria.jpg' width='200px'><br>Corazón de Aguascalientes.");

var museoMuerte = L.marker([21.88417, -102.28878], {icon: customIcon2}).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br><img src='img/Museo-Nacional-de-la-muerte.jpg' width='200px'><br>Un lugar único.");

var feriaSanMarcos = L.marker([21.87888, -102.29727], {icon: customIcon4}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br><img src='img/FeriaNacional.webp' width='200px'><br>Un lugar único.");
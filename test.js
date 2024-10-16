
var apiKey = DotNet.invokeMethodAsync('CRUD_Kart_App', 'APIKey');

console.log(apiKey);
const el = document.getElementById(map);
el.src=`//www.google.com/maps/embed/v1/place?key=${apiKey}&q=Bergen,Norway`;

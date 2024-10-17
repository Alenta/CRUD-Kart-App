
const url = "/test"
const response = await fetch(url)
console.log(response);
const key = await response.json()
console.log(key);
//var testapiKey = DotNet.invokeMethodAsync('CRUD_Kart_App', 'APIKey');

const el = document.getElementById(map);
el.src=`//www.google.com/maps/embed/v1/place?key=${apiKey}&q=Bergen,Norway`;





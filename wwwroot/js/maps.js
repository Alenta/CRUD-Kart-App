
let map;
var markers = [];
var places = [];

async function initMap() {
  // The location of our starting position
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "GOOGLE_MAPS",
  });

  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", (event) => {
    console.log("adding marker at "+ event.lat + "/" +event.latLng);
    addMarker(event.latLng);
  });
  // add event listeners for the buttons
  document
    .getElementById("show-markers")
    .addEventListener("click", showMarkers);
  document
    .getElementById("hide-markers")
    .addEventListener("click", hideMarkers);
  document
    .getElementById("delete-markers")
    .addEventListener("click", deleteMarkers);
  document
    .getElementById("update-places")
    .addEventListener("click", UpdatePlaces);
  // Adds a marker at the center of the map.
}


async function GetPlaceIDLocation(location){
  console.log("IM RUNNING");
  //Example URL
  //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

  //const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location;
  const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCf1V0zj1G6tUTXAwTYpBgUVcyz-6297Zg"

  fetch(url)
  .then((response) => {
    console.log(response);
      if (!response.ok) {
      throw new Error("HTTP error: ${response.status}");
      }
      return response.json();
  })
  .then(response => response.JSON())
  .then((response) => {
    console.log(JSON.stringify(response));
    return response;
  })

  .catch((error) => {
      console.log(error);
  });

}


function UpdatePlaces(){
  console.log("updating markers");
  markers.forEach(marker => {
    console.log("checking marker location");
    GetPlaceIDLocation(marker.lat+","+marker.latLng);
  });
}

async function getPlaceDetails(PlaceID) {
  // Use place ID to create a new Place instance.
  const place = new Place({
    id: PlaceID,
    requestedLanguage: "en", // optional
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "location"],
  });
  // Log the result
  console.log(place.displayName);
  console.log(place.formattedAddress);



  /*
  // Add an Advanced Marker
  const marker = new AdvancedMarkerElement({
    map,
    position: place.location,
    title: place.displayName,
  });
  */
}

// Adds a marker to the map and push to the array.
async function addMarker(position) {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  console.log("add marker clicked, " + position);
  const marker = new AdvancedMarkerElement({
    position,
    map,
  });
  var _id = GetPlaceIDLocation(position);
  const place = new Place({
    id: _id,
    requestedLanguage: "EN",
  });

  markers.push(marker);
  places.push(place);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  console.log("show markers clicked");
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  console.log("deleting markers");
  hideMarkers();
  markers = [];
}

window.initMap = initMap;
async function addMarker(_pos, _title){
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const newMarker = new AdvancedMarkerElement({
    map: map,
    position: _pos,
    title: _title
  });
  markers.push(newMarker);
}


function removeMarker(_title){
  markers.removeMarker(_title);
  showMarkers(map);
}

function changeTitle(_oldTitle, _newTitle){

}

initMap();

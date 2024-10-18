async function initMap() {
    // Request needed libraries.
  
    const url = "./map-token"

    // Call `fetch()`, passing in the URL.
    fetch(url)
    // fetch() returns a promise. When we have received a response from the server,
    // the promise's `then()` handler is called with the response.
    .then((response) => {
        // Our handler throws an error if the request did not succeed.
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        // Otherwise (if the response succeeded), our handler fetches the response
        // as text by calling response.text(), and immediately returns the promise
        // returned by `response.text()`.
        return response.text();
    })
    // When response.text() has succeeded, the `then()` handler is called with
    // the text, and we copy it into the `poemDisplay` box.
    .then((text) => {
        
        const key=text;
    })
    // Catch any errors that might happen, and display a message
    // in the `poemDisplay` box.
    .catch((error) => {
        console.log(error);
    });

    document.getElementById("API").key = key;
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
}

function addMarker(lat, lng){
    const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

initMap();
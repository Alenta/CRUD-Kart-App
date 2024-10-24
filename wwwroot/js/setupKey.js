setupKEY();
async function setupKEY(){  
  const url = "./map-token"
  fetch(url)
  
  .then((response) => {
      if (!response.ok) {
      throw new Error("HTTP error: ${response.status}");
      }
      
      return response.text();
  })

  .then((APIKEY) => {
    console.log(document.querySelector("#API").APIKEY + "OLD");
    document.querySelector("#API").APIKEY = APIKEY;
    console.log(document.querySelector("#API").APIKEY + "NEW");
  })

  .catch((error) => {
      console.log(error);
  });
}



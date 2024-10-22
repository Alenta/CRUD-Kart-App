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
    console.log(APIKEY);
    console.log(document.querySelector("#API"));
    document.querySelector("#API").key = APIKEY;
  })

  .catch((error) => {
      console.log(error);
  });

}
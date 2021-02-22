// input           ID = search            TYPE = text        PLACEHOLDER = Search for destinaton
// button          ID = button            TYPE = submit

// checkbox 1      ID = onlyWeather       TYPE = Checkbox    NAME = travel-information1 
// checkbox 2      ID = onlyAttraction    TYPE = Checkbox    NAME = travel-information2
// checkbox 3      ID = sortAlphabetic    TYPE = Checkbox    NAME = travel-information3

//       KLART     ID = cityName
//       KLART     ID = temperature
//       KLART     ID = weather

//                 ID = attractionName
//                 ID = adress
//                 ID = information

//           Foursquare API
// client id key:     X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY
// client Secret key: CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q
// foursquare URL:    https://api.foursquare.com/v2/venues/explore?

//           OpenWeather API
// APIkey: d9af8ba6b94987343a5e32bf943c0cd0
// URL: https://api.openweathermap.org/data/2.5/weather

// Creating query for button action. 
const button = document.querySelector('#button'); // Refering to button ID.

button.addEventListener('click', event => {
    WeatherBalloon();
}) 


// '#' for ID '.' for class.
const inputSearch = document.querySelector('#search') // Refering to Searchbar ID.

//Getting weather API information. 
function WeatherBalloon( search ) {
    var key = '{d9af8ba6b94987343a5e32bf943c0cd0}';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputSearch.value +'&units=metric&appid=d9af8ba6b94987343a5e32bf943c0cd0')
    .then(function(resp) { return resp.json() }) //Convert data to json.
    .then(function(data) {
        const city = data.name; //constant for searchvalue.
        const temp = data.main.temp; //constant for temperature.
        const weath = data.weather[0].description; //constant for weather.
        console.log(data); //just some output while testing.

        let cityName = document.getElementById('cityName') // refering city name to given element in HTML.
        let temperature = document.getElementById('temperature') // refering temperature name to given element in HTML.
        let weather = document.getElementById('weather') // refering weather name to given element in HTML.
        cityName.innerHTML = city; // Gets the API information for city.
        temperature.innerHTML = temp; // Gets the API information for temperature.
        weather.innerHTML = weath; // Gets the API information for weather.
    })
    .catch(function() {
        //Catch any errors.
    });
}

// Funktion för Foursquare API:n
async function getAttraction() {
    let cityName = inputSearch.value;
    const cID = "X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY";
    const cSecret = "CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q";

    let cDate = new Date();
    let Day = "0" + cDate.getDate();
    let Month = "0" + (cDate.getMonth() + 1);
    let Year = cDate.getFullYear();
    let date = '${Year}${Month}${Day}';

    let response = await fetch (`https://api.foursquare.com/v2/venues/search?near=${cityName}&client_id=${cID}&client_secret=${cSecret}&v=${date}`
    );
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        createElementsAttraction(json);
    } else {
        alert("The city does not exist. Try another one.")
    }
}
// input           ID = search            TYPE = text        PLACEHOLDER = Search for destinaton
// button          ID = button            TYPE = submit

// checkbox 1      ID = onlyWeather       TYPE = Checkbox    NAME = travel-information1 
// checkbox 2      ID = onlyAttraction    TYPE = Checkbox    NAME = travel-information2
// checkbox 3      ID = sortAlphabetic    TYPE = Checkbox    NAME = travel-information3

//                 ID = cityName
//                 ID = temperature
//                 ID = weather

//                 ID = attractionName
//                 ID = adress
//                 ID = information

//           Foursquare API
// client id key:     X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY
// client Secret key: CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q
// foursquare URL:    https://api.foursquare.com/v2/venues/explore?near

//           OpenWeather API
// APIkey: d9af8ba6b94987343a5e32bf943c0cd0
// URL: https://api.openweathermap.org/data/2.5/weather

// Creating query for button action. 
const button = document.querySelector('#button'); // Refering to button ID

button.addEventListener('click', event => {
    WeatherBalloon();
}) 


// # för ID . för class
const inputSearch = document.querySelector('#search') // Refering to Searchbar ID

// Getting weather API information. 
function WeatherBalloon( search ) {
    var key = '{X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY}';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputSearch.value +'&units=metric&appid=d9af8ba6b94987343a5e32bf943c0cd0')
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        const city = data.name; // konstant för sökvärde 
        const temp = data.main.temp; // konstant för temperatur
        const weath = data.weather[0].description; // konstant för vädret.
        console.log(data); // Loggar datorn vid körning.

        let cityName = document.getElementById('cityName')
        let temperature = document.getElementById('temperature')
        let weather = document.getElementById('weather')
        cityName.innerHTML = city;
        temperature.innerHTML = temp;
        weather.innerHTML = weath;
    })
    .catch(function() {
        //Catch any errors
    });
}
// Creating query for button action. 
const button = document.querySelector('#button'); // Refering to button ID.
const resetSearch = document.getElementById("resetButton");
const post = document.getElementById('box2');

button.addEventListener('click', event => {
    WeatherBalloon();
    getAttraction();
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
    let date = `${Year}${Month}${Day}`;

    let response = await fetch (`https://api.foursquare.com/v2/venues/search?near=${cityName}&client_id=${cID}&client_secret=${cSecret}&v=${date}`
    );
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        GetCityAttraction(json);
    } else {
        alert("The city does not exist. Try another one.")
    }
}

//Hämtar information angående ställen i staden.
function GetCityAttraction(json){
    let amountPosts = 0;
    let maxAmoutPosts = 30;
    while (amountPosts < maxAmoutPosts) {
    const innerDiv = document.createElement("div");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");

    let titleText = json.response.venues[amountPosts].name;
    let adress = json.response.venues[amountPosts].location.address;

    title.append(titleText);
    paragraph.append(adress);

    innerDiv.classList.add("attractionFrame");
    title.classList.add("h3");
    paragraph.classList.add("p");

    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);

    post.append(innerDiv);

    amountPosts++;
}

}
//Event för att dölja attraction fönstret.
document.getElementById("c1").onchange = function(e){
    let sec = document.getElementById("box2");
    sec.classList.toggle("hidden");
}
//Event för att ta bort Weather fönstret.
document.getElementById("c2").onchange = function(e){
    let sec = document.getElementById("box1");
    sec.classList.toggle("removed");
}
//Rensar sökhistorik för attractions.
resetSearch.addEventListener("click", () => {
    let e = document.querySelector("#box2");     
    let child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
}
});
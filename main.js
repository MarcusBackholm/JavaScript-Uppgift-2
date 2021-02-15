// Declaring variables to ID elements

let button = document.querySelector('buttonSearch'); // The button.
let searchbar = document.querySelector('searchbar'); // The searchbar.
let day = document.querySelector('day') // What day it is.
let temperature = document.querySelector('temp') // The remperature.
let conditions = document.querySelector('conditions') // The weather conditions.
let cityname = document.querySelector('cityname') // The name of the city.
let adress = document.querySelector('adress') // The specified adress.
let description = document.querySelector('description') // Information at each attraction place.

// Creating event calls with button.



//make the button get the API value when searching on citys with given information from API.
button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q= '+inputText.value+' &appid=d9af8ba6b94987343a5e32bf943c0cd0')
    .then(Response => Response.json())
    .then(data => {
        let nameValue = data['city'];
        let tempValue = data['main']['temp'];
        let description = data['weather'][0]['description'];

        city.innerHTML =nameValue;
        temp.innerHTML = tempValue;
        description.innerHTML = descriptionValue
    })

    .catch(Error => alert('Wrong city name!'))
})
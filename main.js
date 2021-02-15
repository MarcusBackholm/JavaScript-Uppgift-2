// input           ID = inputText         TYPE = text        PLACEHOLDER = Search for destinaton
// button          ID = button            TYPE = submit
// checkbox 1      ID = onlyWeather       TYPE = Checkbox    NAME = travel-information1 
// checkbox 2      ID = onlyAttraction    TYPE = Checkbox    NAME = travel-information2
// checkbox 3      ID = sortAlphabetic    TYPE = Checkbox    NAME = travel-information3
// day             ID = day
// the cityname    ID = cityName
// the temperature ID = temp
// weather condition ID = condition
//                 ID = name
//                 ID = adress
//                 ID = description

//           Foursquare API
// client id key:     X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY
// client Secret key: CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q
// foursquare URL:    https://api.foursquare.com/v2/venues/explore?near

//           OpenWeather API
// APIkey: d9af8ba6b94987343a5e32bf943c0cd0
// URL: https://api.openweathermap.org/data/2.5/weather


// Foursquare API
const clientId = 'X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY';
const clientSecretKey = 'CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q';
const URL  = 'https://api.foursquare.com/v2/venues/explore?near';

//OpenWeather API
const openWeatherApi = 'd9af8ba6b94987343a5e32bf943c0cd0'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

const input = $('#inputText');
const submit = $('#button')

const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.city}</p>
    <p>${location.country}</p>`;
  }
  
  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
      <h2>longitude: ${currentDay.coord.lon}</h2>
      <h2>latitude: ${currentDay.coord.lat}</h2>
      <h2>Windspeed: ${currentDay.wind.speed} m/s</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  }
  
  const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

  const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = url + city + '&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180401';
    try {
      const response = await fetch(urlToFetch);
      if (response.ok){
        // console.log(response);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
        console.log(venues);
        return venues;
  
      }
    } catch (error) {
      console.log(error);
    }
  
  }
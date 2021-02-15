// input           ID = inputText         TYPE = text        PLACEHOLDER = Search for destinaton
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


// Foursquare API
const clientId = 'X5MAVFZN1F5NGMFX1LZ0P2MDFYQEQHPLT0R503XHOJMLEFGY';
const clientSecretKey = 'CXO3WOL1BKKHSHCOE3N4XE3T5DRMVFQOW3BVHU5APWCKTC1Q';
const URL  = 'https://api.foursquare.com/v2/venues/explore?near';

//OpenWeather API
const openWeatherApi = 'd9af8ba6b94987343a5e32bf943c0cd0'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

var button = document.querySelector('.button')
var inputText = document.querySelector('input')
var name = document.querySelector('.name');

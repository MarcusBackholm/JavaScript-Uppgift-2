let button = document.querySelector('mybutton');
let searchbar = document.querySelector('searchbar');

let day = document.querySelector('day')
let cityname = document.querySelector('cityname')
let day = document.querySelector('day')
let temp = document.querySelector('temp')
let condition = document.querySelector('conditions')

button.addEventListener('click', function(){

    fetch()
    .then(Response=>Response.json)
    .then(data=> console.log(data))
    .catch(err=> alert("City not found!"))

})


// need to set variables for my elements

let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let temperature = document.getElementById('temp');
let locationCity = document.getElementById('city');
let button = document.getElementById('btnClick');
let zipCode = document.getElementById('zipCode');

// set state??
// state set for my variables
// state set so nothing loads until button is clicked

let state = {
    locationCity: locationCity,
    humidity: humidity,
    wind: wind,
    temperature: temperature,
}

// set function for getAPI
// function is not functioning??
// added button and event listener to function 
// function is functioning

button.addEventListener('click', function getApi() {
    // placed these variables in the function, they were not working before
    let zipCodeValue = zipCode.value; 
    let imageImg = document.getElementById('imageImg')
    let humidityImg = document.getElementById('humidityImg');
    let windImg = document.getElementById('windImg');
    const apiKey = '0bd53a711178ff89e0b82fd78dc9c36a';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCodeValue + '&appid=' + apiKey;

    // axios.get??
    // tried promise but was not working
    // function that calls to axios
    // if it GETs the information and returns with it
    // THEN carry out function
    axios.get(apiUrl)
        .then(response => {

            // extracting data from the API response
            state.temperature = Math.round(response.data.main.temp * 9 / 5 - 459.67);
            state.locationCity = response.data.name;
            state.humidity = response.data.main.humidity;
            state.wind = response.data.wind.speed;

            // images are not cycling through 
            // if statements?
            // openweathermap has selection of wind conditions
            // if weather = response from api, return nested image
            if (response.data.weather[0].main === 'Clouds') {
                imageImg.src = '/images/clouds.png';
                humidityImg.src = '/images/humidity.png';
                windImg.src = '/images/wind.png';
            } else if (response.data.weather[0].main === 'Clear') {
                imageImg.src = '/images/clear.png';
            } 

            // uppdate HTML elements with the data retrieved from API
            temperature.innerText = state.temperature + '°';
            locationCity.innerText = state.locationCity;
            humidity.innerText = state.humidity + '%';
            wind.innerText = state.wind + 'mph';
        })
    // console.log(zipCodeValue)
})
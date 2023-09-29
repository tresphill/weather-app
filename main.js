let weather = document.getElementById('details');
let temperature = document.getElementById('h1');
let location = document.getElementById('h2');


async function getApi() {
    const apiKey = '0bd53a711178ff89e0b82fd78dc9c36a';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&appid=' + apiKey;

    try {
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const data = response.data;

            // extracting data from the API response
            const location = response.data.name;
            const temperature = (response.data.main.temp);
            const weatherConditions = response.data.weather.description;

            // uppdate HTML elements with the data retrieved from API 
            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather-conditions').textContent = weatherConditions;
        } else {
            console.log('API request returned a non-200 code:', response.status);
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

getApi();

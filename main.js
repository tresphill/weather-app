async function getApi() {
    const apiKey = '0bd53a711178ff89e0b82fd78dc9c36a';
    const zipCode = '40517';

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&appid=' + apiKey
    console.log(apiUrl);
    try {
        const response = await axios.get(apiUrl)

        if (response.status === 200) {
            console.log('Data successfully retrieved from API');
        }
        else {
            console.log('API request returned a non-200 code:', response.status);
        }
    }
    catch (error) {
        console.log('Error fetching weather data:', error)
    }
}
getApi();


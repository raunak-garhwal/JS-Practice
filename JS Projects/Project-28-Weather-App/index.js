const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const weatherimage = document.querySelector(".weather_image");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");

async function checkWeather(city) {
    const APIkey = "da83e6e7bf258b2a5b52aa26843759df";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    try {
        const weatherData = await fetch(url).then(response => response.json());

        const tempCelsius = weatherData.main.temp - 273.15;

        temperature.innerHTML = `${tempCelsius.toFixed(2)} °C`;
        description.innerHTML = weatherData.weather[0].description;
        humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
        windspeed.innerHTML = `Wind Speed: ${weatherData.wind.speed} m/s`;

        console.log(weatherData);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});




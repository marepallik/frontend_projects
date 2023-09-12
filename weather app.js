
const API_KEY = "5c7dc2b162d7a221d9d830ef2449a4e6";

const city = "Nandyal";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.onload = function() {

    if (xhr.status === 200) {

        const data = JSON.parse(xhr.responseText);

        const weatherData = {

            temperature: data.main.temp,

            humidity: data.main.humidity,

            windSpeed: data.wind.speed,

            weatherDescription: data.weather[0].description,

        };

        document.querySelector(".weather-data").innerHTML = `

            <p>Temperature: ${weatherData.temperature}°C</p>

            <p>Humidity: ${weatherData.humidity}%</p>

            <p>Wind Speed: ${weatherData.windSpeed} mph</p>

            <p>Weather Description: ${weatherData.weatherDescription}</p>

        `;

    } else {

        console.error("Error fetching weather data: " + xhr.statusText);

    }

};

xhr.send();

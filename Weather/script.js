alert("Click Ok to check Weather");
const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('button');
const temperature = document.querySelector('.temp');
const status = document.querySelector('.status');
const humidity = document.querySelector('.hum-info');
const wind_speed = document.querySelector('.wind-speed-info');

const weather_img = document.querySelector('.weather-img-status');

async function checkWeather(city) {
    const api_key = "c7819e590bf6809c79dac20176b85cac";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    status.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch (weather_data.weather[0].main) {
        case 'Haze':
            weather_img.src = "cloud.png";
            break;

        case 'overcast clouds':
            weather_img.src = "cloudy.png";
            break;

        case 'Clear':
            weather_img.src = "clear.png";
            break;

        case 'Rain':
            weather_img.src = "rain.png";
            break;

        case 'Mist':
            weather_img.src = "mist.png";
            break;

        case 'Thunderstorm':
            weather_img.src = "snow.png";
            break;

        case 'Clouds':
            weather_img.src = "cloudy.png";
            break;
    }
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

// Event listener for the "Enter" key in the input box
inputBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkWeather(inputBox.value);
    }
});

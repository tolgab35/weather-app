const apiKey = "25cb96287214ca93e89e622f2aa9a6e6";

let isCelsius = true;
let weatherData = null;

async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=41.0082&lon=28.9784&units=metric&lang=tr&appid=${apiKey}`
  );

  const data = await res.json();
  weatherData = data;

  renderWeather();
}

function renderWeather() {
  const degree = document.querySelector(".degree");
  const toggleButton = document.querySelector(".switch");

  const tempC = Math.round(weatherData.main.temp);
  const tempF = Math.round((weatherData.main.temp * 9) / 5 + 32);

  const tempToShow = isCelsius ? `${tempC}°C` : `${tempF}°F`;
  const buttonText = isCelsius ? "Switch to °F" : "Switch to °C";

  degree.textContent = tempToShow;
  toggleButton.textContent = buttonText;

  toggleButton.onclick = () => {
    isCelsius = !isCelsius;
    renderWeather();
  };
}

getWeather();

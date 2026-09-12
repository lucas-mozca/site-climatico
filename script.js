const API_KEY = 'f0e195a4902fc5df870698f71e54a6ae';

async function getWeather() {
  const cityInput = document.getElementById('cityInput').value.trim();
  const city = cityInput.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove acentos
  const weatherDiv = document.getElementById('weatherInfo');
  const errorDiv = document.getElementById('error');

  weatherDiv.innerHTML = '';
  errorDiv.textContent = '';

  if (!city) {
    errorDiv.textContent = 'Digite uma cidade válida.';
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }

    const data = await response.json();

    const name = data.name;
    const temp = data.main.temp;
    const feels = data.main.feels_like;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const wind = data.wind.speed;

    weatherDiv.innerHTML = `
      <h3>${name}</h3>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Ícone do clima" />
      <p><strong>Temperatura:</strong> ${temp}°C</p>
      <p><strong>Sensação térmica:</strong> ${feels}°C</p>
      <p><strong>Clima:</strong> ${desc}</p>
      <p><strong>Vento:</strong> ${wind} km/h</p>
    `;
  } catch (error) {
    errorDiv.textContent = 'Erro: ' + error.message;
  }
}

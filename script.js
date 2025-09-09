const btn = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const apiKey = "f9efef2ca43d12277af8b5e52fa35213";

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Ab zaroori cheeze extract karo
    const cityName = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    // Page pe show karo
    document.getElementById("cityName").textContent = `City: ${cityName}`;
    document.getElementById("temperature").textContent = `Temperature: ${temp} °C`;
    document.getElementById("description").textContent = `Condition: ${desc}`;

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

btn.addEventListener("click", function () {
  const cityName = input.value;
  getWeather(cityName);
});

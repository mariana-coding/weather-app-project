const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");

  if (cityInput.value) {
    h1.innerHTML = cityInput.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  } else {
    alert("Please type a city");
    h1.innerHTML = null;
  }
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = `${temperature}`;
  descriptionElement.innerHTML = `${description}`;
}

let form = document.querySelector("#weather-app");
form.addEventListener("submit", changeCity);

let button = document.querySelector("#search-button");
button.addEventListener("click", changeCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getHours();

let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

let currentDate = document.querySelector(".current-date");

currentDate.innerHTML = `${day}, ${date}:${minutes}`;

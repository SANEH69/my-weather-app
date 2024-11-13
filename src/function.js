function formatDate(date) {
let hours = date.getHours();
let minutes = date.getMinutes();

let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let day = days[date.getDay()];
if (minutes < 10) {
    minutes = `0${minutes}`; 
}
return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let tempElement = document.querySelector("#current-temp");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let dayElement = document.querySelector("#day");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");


    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    dayElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
    tempElement.innerHTML = `${temperature}°C`;

    getForecast(response.data.city);
}

    function searchKey(city) {
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
}

function searchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    searchKey(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[date.getDay()];
}

function getForecast(city) {
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
    let forecastHtml = "";
    console.log(response);

    response.data.daily.forEach(function (day, index) {
        if (index < 5) {
        forecastHtml = forecastHtml +
        `<div class="weekly-forecast-day">
        <div class="weekly-forecast-date">${formatDay(day.time)}</div>
        <img src = "${day.condition.icon_url}" class="weekly-forecast-icon" />
        <div class="weekly-forecast-temperatures">
          <div class="weekly-forecast-temperature"><strong>${Math.round(day.temperature.maximum)}°</strong></div>
          <div class="weekly-forecast-temperature">${Math.round(day.temperature.minimum)}°</div>
      </div>
      </div>`;
        }
    });

    let forecastElement = document.querySelector("#weekly-forecast");
    forecastElement.innerHTML = forecastHtml;
}
searchKey("Durban");
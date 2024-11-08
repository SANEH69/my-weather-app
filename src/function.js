let now = new Date()

let span = document.querySelector("span");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

span.innerHTML = `${day} ${hours}:${minutes}`;

function displayTemperature(response) {
    let tempElement = document.querySelector("#current-temp");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");

    cityElement.innerHTML = response.data.city;
    tempElement.innerHTML = `${temperature}°C`;
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

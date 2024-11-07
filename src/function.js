function displayTemperature(response) {
    let tempElement = document.querySelector("#current-temp");
    let temperature = Math.round(response.data.temperature.current);
    h1.innerHTML = document.querySelector("h1");
    h1 = response.data.city;
    tempElement.innerHTML = temperature;
}
function searchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    cityElement.innerHTML = document.querySelector("#current-city");
    cityElement = searchInput.value;

    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement}&key=${apiKey}`;

    axios.get(apiUrl).then(displayTemperature);
}

let now = new Date()

let span = document.querySelector("span");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

span.innerHTML = `${day} ${hours}:${minutes}`;
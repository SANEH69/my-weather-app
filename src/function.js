let now = new Date()

let span = document.querySelector("span");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

span.innerHTML = `${day} ${hours}:${minutes}`;

function searchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", searchForm);
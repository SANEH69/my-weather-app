let now = new Date()

let span = document.querySelector("span");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

span.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#seach-input-text");

    let h1 = document.querySelector("h1");
    h1.innerHTML = `search for ${searchInput.value}`;
    console.log(h1);
}

let form = document.querySelector("#search-form");
form.addEventListener('submit', search);
let now = new Date()

let .date = document.querySelector(".date");

let date =now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

.date.innerHTML = `${day} ${hours}:${minutes}`; 
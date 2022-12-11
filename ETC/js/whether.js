const API_KEY ="5cb4f4a8cabfb7ea5c72264e6a5fd43d";

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You are live in ", lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        const weather = document.querySelector("#weather_state");
        const city = document.querySelector("#city");
        const wind = document.querySelector("#wind");
        const state = document.querySelector("#state");
        const feel_weather = document.querySelector("#feel_like");
        const name = data.name;
        
        weather.innerText = data.main.temp;
        wind.innerText = data.wind.speed;
        state.innerText = data.weather[0].main;
        city.innerText = name;
        feel_weather.innerText = data.main.feels_like;
    });
}

function onGeoError() {
 alert("Can't your positin and whether infomation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


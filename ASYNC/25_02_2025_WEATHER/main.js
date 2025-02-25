const API_KEY = "69902c6c30a342d6b7e163258241906";

const getWeather = (cityName = "Madrid") => {
  document.querySelector(".container").innerHTML = `
  <img class="spinner" src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="Spinner"/>
  `
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => normalizeWeather(res));
};

const normalizeWeather = (data) => {
  const weather = {
    city: data.location.name,
    temp: data.current.temp_c + "º",
    text: data.current.condition.text,
    image: data.current.condition.icon,
    hum: data.current.humidity + "%",
    feels: data.current.feelslike_c + "º",
  };
  printData(weather);
};

const printData = (data) => {
  const container = document.querySelector(".container");
  container.innerHTML = `
  <h2>${data.city}</h2>
  <p class="temp">${data.temp}</p>
  <img src="${data.image}" alt="${data.text}"/>
  <p>Feels like: ${data.feels}</p>
  <p>Humidity: ${data.hum}</p>
  `;
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  const cityName = document.querySelector("#cityInput").value;
  getWeather(cityName);
  //Vaciamos el input
  document.querySelector("#cityInput").value = "";
});

document.querySelector("#cityInput").addEventListener("keyup", (ev) => {
  if (ev.code === "Enter") {
    const cityName = document.querySelector("#cityInput").value;
    getWeather(cityName);
    //Vaciamos el input
    document.querySelector("#cityInput").value = "";
  }
});

if ("geolocation" in navigator) {
  //Solicitamos la ubicacion actual
  navigator.geolocation.getCurrentPosition((position) => {
    const location = position.coords.latitude + "," + position.coords.longitude;
    getWeather(location);
  });
}
getWeather("Barcelona");

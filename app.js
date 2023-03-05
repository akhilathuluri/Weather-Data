const API_KEY = `f48bc04e88b7554ba15df81fe45c3ec5`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
            <p>Humidity: ${data.main.humidity}%</p>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)

function showIpAddress() {
    var ipAddress = document.getElementById("ip-address");
    var locationElement = document.getElementById("location");
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        ipAddress.innerHTML = "<strong>Your IP address:</strong> " + data.ip;
        locationElement.innerHTML = "<strong>Your location:</strong> " + data.city + ", " + data.region + ", " + data.country_name;
      })
      .catch(error => {
        console.error(error);
      });
}
  
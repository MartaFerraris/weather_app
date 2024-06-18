const apiKey = "e89e4512eef1cf05200c0fd51b25afb4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (city !== ""){
        if (response.status == 404 || response.status == 400) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();
    
            console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "png/cloudy.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "png/sun.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "png/rainy.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "png/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "png/mist.png";
            } else if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "png/cloudy.png";
            };
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


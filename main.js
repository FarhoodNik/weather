const api = {
    key: "17e0d3e3d25c7f61f1c56948a54989a3",
    base: "https://api.openweathermap.org/data/2.5/"
  }
const searchbox= document.querySelector(".search-box");
searchbox.addEventListener("keydown", setResult);
function setResult(key){
    if(key.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults (request) {
    fetch(`${api.base}weather?q=${request}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let timenow = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(timenow);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.floor(weather.main.temp)}<span>°c</span>`;
  
    let weatherNow = document.querySelector('.current .weather');
    weatherNow.innerText = weather.weather[0].main;
  
    let hiLow = document.querySelector('.hi-low');
    hiLow.innerText = `${Math.floor(weather.main.temp_min)}°c / ${Math.floor(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (Date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[Date.getDay()];
    let date = Date.getDate();
    let month = months[Date.getMonth()];
    let year = Date.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
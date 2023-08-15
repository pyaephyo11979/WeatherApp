
let searchBtn=document.getElementById("sBtn");
let weatherInfoPanel=document.getElementById("weatherInfoPanel");
let searchCity = document.querySelector("#sCity");
function search(){
let city=searchCity.value;
let url=`http://api.weatherapi.com/v1/current.json?key=d8d2fb3e6bb54d88858120828230208&q=${city}&aqi=yes`
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    weatherInfoPanel.innerHTML=`
<div>
<h1 id="weatherDesc" class="display-4">${data.current.condition.text}</h1>
<img id="weatherIcon" src="${data.current.condition.icon}" class="img-fluid" alt="weather icon" style="width: 30%;">
<h1 id="cityName">${data.location.name}</h1>
<h2 id="regionName">Region/State: ${data.location.region}</h2>
<h2 id="countryName">${data.location.country}</h2>
<h3 id="localTime">LocalTime: ${data.location.localtime}</h3>
<h3 id="temp">CurrentTemperature:</i> <span class="d-inline">${data.current.temp_c}'C , ${data.current.temp_f}'F</span></h3>
<h3 id="windSpeed"><i class="fas w3-text-blue fs-3 fa-wind"></i> <span class="d-inline">${data.current.wind_mph} mph</span></h3>
<h3 id="feel-like">It'sFeelsLike: <span class="d-inline">${data.current.feelslike_c}'C , ${data.current.feelslike_f}'F</span> because of ${data.current.humidity} % <i class="fas w3-text-green fa-tint"></i></h3>
<h3 id="uv">UV: <span class="d-inline">${data.current.uv}</span></h3>
</div>
    `
})}
searchBtn.addEventListener("click",search);
searchCity.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        search();
        searchCity.value="";
    }
})
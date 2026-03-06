function getWeather(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(async function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

let response = await fetch(url);
let data = await response.json();

document.getElementById("location").innerText =
"Latitude: " + lat.toFixed(2) + " , Longitude: " + lon.toFixed(2);

document.getElementById("temp").innerText =
data.current_weather.temperature + "°C";

document.getElementById("desc").innerText =
"Wind Speed: " + data.current_weather.windspeed + " km/h";

});

}else{

alert("Geolocation not supported");

}

}

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/ae1f47097e29c996/forecast/geolookup/conditions/q/MN/Franklin.json',true)

weatherObject.send();

weatherObject.onload = function(){

	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	
	document.getElementById('temp').innerHTML = weatherInfo.current_observation.temperature_string;
	
	document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
	
	document.getElementById('pic').src = weatherInfo.current_observation.icon_url;
	
	document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_mph;
	
	document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
	
	document.getElementById('today').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
	
}
	
	
var weather = new XMLHttpRequest();

weather.open('GET','https://api.wunderground.com/api/ae1f47097e29c996/forecast/geolookup/conditions/q/OR/Springfield.json',true)

weather.send();

weather.onload = function(){

	var weatherinfo = JSON.parse(weather.responseText);
	console.log(weatherinfo);
	
	document.getElementById('temp1').innerHTML = weatherinfo.current_observation.temperature_string;
	
	document.getElementById('conditions1').innerHTML = weatherinfo.current_observation.weather;
	
	document.getElementById('pic1').src = weatherinfo.current_observation.icon_url;
	
	document.getElementById('wind1').innerHTML = weatherinfo.current_observation.wind_mph;
	
	document.getElementById('precip1').innerHTML = weatherinfo.current_observation.precip_today_in;
	
	document.getElementById('today1').innerHTML = weatherinfo.forecast.txt_forecast.forecastday["0"].fcttext;
	
} // end of on load
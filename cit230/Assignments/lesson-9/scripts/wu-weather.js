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
	
} // end of on load
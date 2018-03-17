	
var weather = new XMLHttpRequest();

weather.open('GET','https://api.wunderground.com/api/ae1f47097e29c996/forecast/geolookup/conditions/q/TX/Greenville.json',true)

weather.send();

weather.onload = function(){

	var weatherinfo = JSON.parse(weather.responseText);
	console.log(weatherinfo);
	
	document.getElementById('temp2').innerHTML = weatherinfo.current_observation.temperature_string;
	
	document.getElementById('conditions2').innerHTML = weatherinfo.current_observation.weather;
	
	document.getElementById('pic2').src = weatherinfo.current_observation.icon_url;
	
	document.getElementById('wind2').innerHTML = weatherinfo.current_observation.wind_mph;
	
	document.getElementById('precip2').innerHTML = weatherinfo.current_observation.precip_today_in;
	
	document.getElementById('today2').innerHTML = weatherinfo.forecast.txt_forecast.forecastday["0"].fcttext;
	
} // end of on load
function doInputOutput() {
		var high = parseFloat(document.getElementById("hightemp").value);
        var low = parseFloat(document.getElementById("lowtemp").value);
        var tempF = (high + low)/2;
		var speed = parseFloat(document.getElementById("windspeed").value);
		var wind = windChill(tempF, speed);
		document.getElementById("outputDiv").innerHTML = wind.toFixed(2);
		}
		
	function windChill(tempF, speed) {
		var windchill = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) +.4275 * tempF * Math.pow(speed, .16);
		return windchill;
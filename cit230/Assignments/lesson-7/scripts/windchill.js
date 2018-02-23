function doInputOutput() {
		var high = 90;
        var low = 66;
        var tempF = (high + low) / 2;
		var speed = 5;
		var wind = windChill(tempF, speed);
		document.getElementById("outputDiv").innerHTML = wind.toFixed(2);
		}
		
	function windChill(tempF, speed) {
		var windchill = 35.74 + .6215 * tempF - 35.75 * Math.pow(speed, .16) +.4275 * tempF * Math.pow(speed, .16);
		return windchill;
    }
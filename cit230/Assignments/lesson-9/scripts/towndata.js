var towndata = new XMLHttpRequest();
towndata.open('', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
towndata.send();


request.onload = function() {
	var towndata = JSON.parse(request.responseText)['towns'];
	
		document.getElementById('franklin_moto').innerHTML = Town.towns["0"].motto.fcttext;
	}

	

	
	
}
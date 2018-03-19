var towndata = new XMLHttpRequest();
towndata.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
towndata.send();

towndata.onload = function(){

	var towns = JSON.parse(towndata.responseText);
	console.log(towns);
	
	
}
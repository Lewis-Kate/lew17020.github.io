var section = document.querySelector('section');

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("service/json");
    xobj.open('GET', 'file.json', true);


request.onload = function() {
    var services = request.response;
    displayServices(services);
}


function displayServices(jsonObj) {
  var towns = jsonObj['service'];
      
  for (var i = 0; i < service.length; i++) {
      if (i === 2) { continue; }
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    
    myH2.textContent = services[i].name;
    myPara1.textContent = 'Type: ' + services[i].type;
   

  }
}
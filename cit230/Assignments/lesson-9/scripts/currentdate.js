
function currentDate() {
      var d = new Date();
      var day = d.getDate();
      var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
      var year = d.getFullYear();
     
      var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
      var n = weekday[d.getDay()]+"," + " " + day + " " + month[d.getMonth()] + " " + year;

      document.getElementById("currentdate").innerHTML = n;
}

    
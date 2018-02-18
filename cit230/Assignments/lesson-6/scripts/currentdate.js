
function currentDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
      var year = currentDate.getFullYear();
      var n =(day + " " + "month" + " " + year);

      document.getElementById("currentdate").innerHTML = n;
}

    
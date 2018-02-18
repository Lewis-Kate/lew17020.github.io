
function currentDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var n =(day + "/" + month + "/" + year);

      document.getElementById("currentdate").innerHTML = n;
}

    
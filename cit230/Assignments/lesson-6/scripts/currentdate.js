
function currentDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth(month['01','January']['02','February']['03','March']['04','April']['05','May']['06','June']) + 1;
      var year = currentDate.getFullYear();
      var n =(day + "/" + month + "/" + year);

      document.getElementById("currentdate").innerHTML = n;
}

    
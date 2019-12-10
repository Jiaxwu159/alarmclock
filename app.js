function myFunction() {
    var d = new Date();

    var hour = d.getHours();
    var min = d.getMinutes(); 
    var secs = d.getSeconds();
    var theMonth = d.getMonth();
    var theDate = d.getDate(); 
    var theYear = d.getFullYear();

    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12; 
        session = "PM"
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    secs = (secs < 10) ? "0" + secs : secs;

    var dayTime = theMonth + "/" + theDate + "/" + theYear;

    var clockTime = hour + ":" + min + ":" + secs + " " + session ;
    
    

    clock.innerText = clockTime;
    day.innerText = dayTime;

  }
  
setInterval(myFunction, 1000);


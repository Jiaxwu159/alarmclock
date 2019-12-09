function myFunction() {
    var d = new Date();

    var hour = d.getHours() - 12;
    var min = d.getMinutes(); 
    var secs = d.getSeconds();

    document.getElementById("clock").textContent = d;
    document.getElementById("hourhour").innerText = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("secs").textContent = secs;
  }
  
myFunction();
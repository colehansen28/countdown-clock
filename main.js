let finaldate = new Date("May 30, 2023 17:0:0")

setInterval(function(){
    let now = new Date()

    let timer = finaldate - now;

    var days = Math.floor(timer / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timer % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
    if(seconds < 10){
        document.querySelector(".seconds").innerHTML = "0" + seconds;  
    }
    if(minutes < 10){
        document.querySelector(".minutes").innerHTML = "0" + minutes;  
    }
    if(hours < 10){
        document.querySelector(".hours").innerHTML = "0" + hours;  
    }
    if(days < 10){
        document.querySelector(".days").innerHTML = "0" + days;  
    }
},1000);
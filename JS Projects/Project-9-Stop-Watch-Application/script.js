window.onload = function(){

    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");
    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    let seconds = 0;
    let miliSeconds = 0;
    let interval;
    
    startBtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start,10);
    }

    stopBtn.onclick = function(){
        clearInterval(interval);
    }

    resetBtn.onclick = function(){
        clearInterval(interval);
        seconds = 0;
        miliSeconds = 0;
        addSeconds.innerHTML = "00";
        addMilliSeconds.innerHTML = "00";
    }

    function start(){
        miliSeconds++;
        addMilliSeconds.innerHTML = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;
      
        if(miliSeconds > 99){
            seconds++;
            miliSeconds = 0;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            addMilliSeconds.innerHTML = "00";
        }
    }

};
const startButton   = document.querySelector('[data-action="start"]');
const stopButton    = document.querySelector('[data-action="stop"]');
const resetButton   = document.querySelector('[data-action="reset"]');
const minutes       = document.querySelector('.minutes');
const seconds       = document.querySelector('.seconds');

let timerTime    = 00;
let isRunning    = false;
let interval;




function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();

    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer () {
    timerTime ++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60; //medulo function

    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}

function pad(number) {
    return(number < 10) ? '0' + number : number; 

 
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


// function pad(number) {
//     return(number < 10) ? '0' + number : number ;  // one line version of below

//     // if (number < 10) {
//     //     return '0' + number;
//     // }else{
//     //   return number;  
//     // }
// }


//BELOW = FUNCTION START TIMER ABOVE
// setInterval(function() {
//     timerTime ++;

//     const numOfMinutes = Math.floor(timerTime / 60);
//     const numOfSeconds = timerTime % 60; //medulo function

    


//     console.log(numOfMinutes, numOfSeconds);

//     minutes.innerText = pad(numOfMinutes);
//     seconds.innerText = pad(timerTime);

// }, 1000);
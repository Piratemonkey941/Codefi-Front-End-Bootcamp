// Exercise #1: Basic
// Aim: Create a button that changes the background and text color randomly when clicked

// document.querySelector(".btn").addEventListener("click", colorChange)
// function colorChange() {
//   var arr = []
//   for (let i = 0;i<3;i++) {
//     var random = Math.floor(Math.random() * 255)
//     arr.push(random)
//   }
//   document.querySelector("body").style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
// }







// Exercise #2: Intermediate
// Aim: Create a function that returns the number of true values in an array.

// Examples

// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0




// countTrue([])


// function countTrue(sorter) {
//   let count = 0
//   for (let i = 0; i< sorter.length; i++) {
//     if (sorter[i] === true) {
//         count++
//      } else {
//         0
//     }
   
    
//   }
 
//   console.log(count)
// }

// console.log (countTrue)


// Notes

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).






// Exercise #2: Advanced
// Aim: Create a working JavaScript Clock or any other project we created today.

const startButton = document.querySelector('[data-action = "start"')
const stopButton = document.querySelector('[data-action = "stop"')
const resetButton = document.querySelector('[data-action = "reset"')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timerTime = 00;
let isRunning = false;
let interval;

function startTimer() {
    if(isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 10000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
stopTimer();

    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer(){
    timerTime++;

    const numOfMinutes = Math.floor(timerTime/60);
    const numOfSeconds = timerTime % 60;

    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}

function pad(number){
    return (number < 10) ? '0' + number : number
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);




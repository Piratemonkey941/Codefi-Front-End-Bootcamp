// VARIABLES ====================================
var x;
let y;
const z = 10;

console.log("x:", x)
console.log("y:", y)
console.log("z:", z)


x = 1;
y = 2;

console.log("x:", x)
console.log("y:", y)
console.log("z:", z)

var x;



// CONSTANTS ====================================


let age = 10;
let name = "john";
let dev = true;
// let location = null;
let blue;
let person = {
    name: "anny",
    ano: 11
};

let people = ["Johnny", "Jimmy", "jamie"];

let logName = function(){
    console.log("jimmy")
}

let anotherLogName = () => {
    console.log("Amy")
}

// let a;
// let b;
// let c;

let a, b, c = 10;

let myFinalGrade = (90 + 85)/2

console.log(myFinalGrade);

// ======================================================

const post = {
    status: " I am hiking today!"
}

console.log(post)

post.status = 'I was hiking todat!'
console.log(post)


const posts = [
    {
    status: " I am hiking today!"
    }
]
console.log(posts)

posts.push({status: 'I got my licence today!'})

console.log(posts);


// scope practice ==================================================

let optionOne = 3;
let optionTwo = 30;

function isDevisableByTen() {
    let result = null;
    if ((optionTwo % 10) === 0){
        result = true;
    } else {
        result = false;}
        return result

}
console.log(isDevisableByTen())

// hoisting ==================================================

let paycheck = 300;
function addRandomNumber (num){
    let randomNumber = Math.random() * 100;
    logNumberToConsole(randomNumber + num);
}

function logNumberToConsole (num) {
    console.log(num);
}

addRandomNumber(paycheck)
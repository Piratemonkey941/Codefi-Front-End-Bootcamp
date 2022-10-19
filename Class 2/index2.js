
// // functionality function cal be called

// function sayHello() {
//     console.log('hello');

//     // calls say hello 3 times
// }

// sayHello();

// sayHello();

// sayHello();

// function saySomething(message = 'goodbye') {  // default param 'goodbye
//     console.log('goodbye');
// }
// saySomething('hello'); // console hello

// saySomething(); // console goodbye

// saySomething();// console goodbye



// function saySomething(message = 'goodbye', whisper = false) {

//     if (whisper) {
//         console.log(`%c${message}`, 'font-size:5px');
//     } else {
//     console.log(message);
//     }
// }

// saySomething('hello', true);

// saySomething('My name is Chris', true);

// saySomething();


// function squared(a) {  // squaring function
//     return a*a;
// }

// const newSquared = squared(3); 
// console.log(newSquared );


// const squared = function (a) {
//     return a*a;
// }

// same as above

// const squared = (a) =>{  // declaired variable do not get hoisted
//     return a*a;
// }

// const otherSquared = squared;

// //FUnctions as values

// punch();

// function punch(){  //function gets hoisted to top 
//     console.log('punch');
// }

// const hero = { 
//     name: 'Bruce Wayne',
//     alias: 'Batman',
//     catchphrase:'To the Batcave!',

//     speak: function () {
//         return "attention" + this.catchphrase;  //method this refers back to hero
//     },
//     attack: function (sound) {
//       //  return '(punchesbadguy)' + sound;
//         return `(punchesbadguy)  ${sound}`;

//     }
// }; 

// //property access
// const thingToLookFor = 'alias';

// console.log(hero.name); //brucewayne
// console.log(hero['name']); //bruce wayne,  needs string
// console.log(hero[thingToLookFor]);  //batman

// //accessing methods (functions)

// console.log(hero.speak());
// console.log(hero.speak());
// console.log(hero.attack('POWWW'));

// 'this is my string'.toUpperCase(); // method to string makes upper case

//BUILT IN OBJECTS

// const first  = 'this is a string';
// const second = String('this is a string');

// console.log('this is a string'.toUpperCase());            // same thing
// console.log(string('this is a string').toUpperCase());    // same thing

// console.log(first == second); //true
// console.log(first === second); //true
// 
// everyting housed in window/ document

//<============video 11 min 4 mdn w3 reference====================>

// console.group('primitives vs objects')
//     console.log(Object);
//         console.log(first === second); // true
//         console.log(
//             typeof first, 
//             typeof String('this is a string'),
//             typeof new String()
//         )
// console.groupEnd();

// //strings

// const sentence = 'this is my sentence'
// console.group('String');
//     console.log(first.toUpperCase());  // THIS IS A STRING
//     console.log(second.toLowerCase());  // this is a string
//     console.log(sentence.startsWith('this is'));  // true
//     console.log('beer'.repeat(20)); // beerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeer
//     console.log('look at me go      '.trim()); //look at me go


// console.groupEnd();

// // numbers and math

// console.group('numbers and math')
//             console.log(1..toString()); //1
//             console.log((1).toString());  //1
//             console.log(Number.isInteger(5)); //true
//             console.log(Number.isInteger(5.43)); //false
//             console.log((1.23456).toFixed(2));  //1.23
//             console.log(
//                 Math.random().toFixed(2),   //.50
//                 Math.ceil(1.56),   //1.56
//                 Math.floor(6.3)    //6
//             );

// console.groupEnd();


// //arrays

// console.group('Array')

// const myArr = ['chris', 'nick', 'holly'];

// console.log(myArr.length); // 3
// console.log(myArr.join('-')); //chris-nick-holly
// console.log(myArr.push('ado'), myArr); //['chris', 'nick', 'holly', 'ado'] adds to end
// console.log(myArr.pop(), myArr);  // ['chris', 'nick', 'holly'] removes off end array

// myArr.forEach(function(user){
//     console.log(user);
// });   //functional programing function that takes aother function
// // chris
// // nick
// // holly

// myArr.forEach((user) => console.log(user)) //functional programing function that takeas aother function
// // chris
// // nick
// // holly

// console.groupEnd();

// //DOM AND DOM EVENTS

// //uses browser objects

//1grab elementst from dom 

// const body = document.querySelector('body');
// // const body = document.body;  // alternent option

// body.style.backgroundColor = '#C00C00';

//alternet way
// document.body.style.backgroundColor = '#C00C00';

// 2 attach event listeners(3 ways)

//option 1 =============
function goCooCoo() {
    document.body.style.backgroundColor = '#C00C00'; 
}

//option 2: use events directly on the element in js =============

// const coffeeButton = document.querySelector('.coffee-btn');
// coffeeButton.onclick = function() {
//     document.body.style.backgroundColor = '#C0FFEE';
// }

// coffeeButton.onmouseenter = goCooCoo;


// Option 2 ==============================
const coffeeButtons = document.querySelectorAll('.coffee-btn');

function getCoffee() {
    document.body.style.backgroundColor = '#C0FFEE';
}

coffeeButtons.forEach(function(button) {
    button.onclick = goCooCoo;
});

// Option 3 ==============================

const lalaButton = document.querySelectorAll('.lala-btn');

function notListening () {
    document.body.style.backgroundColor = '#1A1A1A';
}

lalaButton.addEventListener('click', notListening);
lalaButton.addEventListener('mouseenter', goCooCoo);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseleave', notListening));









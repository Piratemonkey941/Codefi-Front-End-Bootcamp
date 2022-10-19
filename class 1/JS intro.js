// 'this is my string';
// 'my second String';
// 'my name is anthony';

// // numbers

// 10;
// 500;
// 345;

// // booleans lets you know true false

// true;
// false;

// console.log(Boolean(''));

// //speciels 
// // undefined;
// // let user = 'chris';

// // console.log(user);

// null; // no value

// // let chris = null; 

// NaN // not a number


// // object  needs key and value

// const user = {
//     name: 'Chris',
//     username: 'chrisoncode'
// };

// // array

// const users = ['chris', 'nick', 'holly'];

// // console.log(users[0]);
// const luckyNumbers = [1, 43, 54, 132];
// const whatever = ['chris', 1, 'holly'];

// const superUsers = [
//     {name: 'chris'},
//     {name: 'nick'},
//     {name: 'holly'}

// ];

// console.log(superUsers[0].name);

// // declaring variables  diferent variables makes things clearer

// var thing = 'first';   // variable can also be reassigned
// const otherThing = 'second';  // cannot be reassigned
// let newThing =  'third ';  // can also be reassigned

// let myVariable;

// myVariable = 'something'


//====================================================

// comparisons
// coorsion == are they equal and il will coorsion
// === check that they are equal and that their type is the same 
// != not equal to 


// const origional = 'chris';
// const clone = 'Chris';

// console.group('String')
//     console.log(origional == 'chris'); // true
//     console.log(origional == clone); // false
//     console.log(origional == clone.toLowerCase()); // true
// console.groupEnd();

// //=============================================

// const num1 = 10;
// const num2 = '10';

// console.group('Numbers')
// console.log(num1 == num2); // true
// console.log(num1 === num2); // false
// console.log(num1 != num2); // false
// console.log(num1 !== num2); // true
// console.groupEnd();

// //=================================================

// let what ;  // undefined
// let thing = null;

// console.group('Booleans')
//     console.log(Boolean(what))
//     console.log(Boolean(thing))
//     console.log(Boolean(num1))
//     console.log(Boolean(num2))
//     console.log(Boolean({}))
//     console.log(Boolean([]))
// console.groupEnd();

// //==================================

// const firstArray = [1, 2, 3];
// const secondArray = [1, 2, 3];

// const firstObj = {color: 'red'};
// const secondObj = {color: 'red'};

// console.group('Objects and Arrays')
// console.log(firstArray == secondArray)  // false 
// console.log(firstObj == secondObj) // false 
// console.log(firstObj === secondObj) // false 
// console.groupEnd();

// //============================================


// console.group('And Or')

// console.log(Boolean('blah') && Boolean('thing'))  // true
// console.log(Boolean('blah') && Boolean('')) // false 
// console.log(Boolean('blah') || Boolean('')) // true 
// console.log(Boolean('') || Boolean('')) // false

// console.groupEnd();


// =======================================

// Conditionals and Loops

const name = prompt('what is your name');

const userName = 'chrisoncode';

// if 

// if (name == 'nick'|| name == 'chris') {
//    alert ('hello'); 
// }

// else if (name == 'holly'){
//     console.log('this is holly');
// }

// else {
//     console.log('not nick');
// }


// for loop

const dogsList = document.querySelector('.dogs-list');
const dogs = [
    {name: 'bruce', type:'chihuahua'},
    {name: 'chance', type:'bernese'},
    {name: '', type:''},
    {name: '', type:''},
]


// while loop 

// do while loop

// for ... of iterator
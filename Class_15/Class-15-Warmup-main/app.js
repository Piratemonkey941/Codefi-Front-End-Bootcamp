// // // Student attempt

// let numberstwo = [];

// function test() {
//     let subArray = [];
//     let number = [];
//     for (var i = 1; i <= 50; i++) {
//         subArray.push();
//         number.push(subArray.concat(i));
       
//     }
//     let filteredArray = number.filter((n) => n % 2 == 1); // providing odd numbers
   
//     let summ = 0

//     for(let i = 0;i < 
//         filteredArray.length; i++){
//         summ += number[i]
//     }
//     // const reducedArray = filteredArray.reduce((a, b) => a+b)

//     // console.log(JSON.stringify(reducedArray))
//     console.log(summ)
// }

// test()




let numbers = [];

for(let i = 0;i < 50; i++){
    numbers.push(i)
}
numbers = numbers.filter((n) => n % 2 === 1 )

let sum = 0

for(let i = 0;i < numbers.length; i++){
    sum += numbers[i]
}

console.log(sum)
// console.log(numbers)



// Push numbers 0 - 50 into this array. Use the push method to do this.
// Hint. Using a loop will be a good use case in this scenario.
// Use the built in array method filter to filter out even numbers of the array.

// From there, add each and every number from the array.

// function
// loop through input number x amount of times 
// push each interval to the array


//TRIED BELOW 

//    let sum = 0

//     for (let i = 0; i < filteredArray.length; i++) {
//         sum += array[i];
    // }
    // console.log(sum)

    // console.log(numbers[])
// console.log(numbers)

//const reducedArray = filteredArray.reduce((a, b) => a+b, 0) adds array onto one whole line 
//0135791113151719212325272931333537394143454749


  // const reducedArray = filteredArray.reduce((a, b) => a+b)
// Given the empty array.

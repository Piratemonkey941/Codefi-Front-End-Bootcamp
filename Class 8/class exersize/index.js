function makePlusFunction(plusNum){
    return function(num){
        num += plusNum;
        return num;
    }
}

const plusFive = makePlusFunction(5);

console.log(plusFive(2));

console.log(plusFive(-8));


// // first try
// function makePlusFunction (makePlusFunction){
//     const plusNum = 10
//     return plusNum + makePlusFunction
// }
// const plusFive = makePlusFunction(4)
// console.log(plusFive)
   // let plusNum = 4

// const timesFunction = (function() {
//     let makePlusFunction = 5;
   //     return {
//       incrementCounter: function() {
//         return makePlusFunction * plusNum;
//       },
//     };
//   })();
  
// // second try
//   let currCount;
  
//   currNume = timesFunction.incrementCounter();
//   console.log("currCount after incrementing:", currNume);

//EX 2    =======================================================================


function asciiCapitalize(str) {
    let returnString = ""

    for(let i = 0; i < str.length; i++) {
      if(str.charCodeAt(i) % 2 === 0) {
        returnString += str[i].toUpperCase();
      } else {
        returnString += str[i].toLowerCase();
      }
    }
    return returnString;
  }

  asciiCapitalize("to be or not to be!");

console.log(asciiCapitalize('anthony'))

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));


//Initial try
// function convertUpperCase(str) {
//     let arr = str.split('');
//     let output = [];
//     let temp;
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
//         temp = String.fromCharCode((arr[i].charCodeAt(0) - 32))
//         output.push(temp)
//       } else {
//         output.push(arr[i])
//       }
//     }
//     return output.join('')
//   }
  
//   console.log(convertUpperCase('test'))

//EX 3    =======================================================================

function interview (arr, time){
    if (time > 120 || arr.length < 8  ) {
        return "disqualified";
    }else if (arr[0] > 5 || arr[1] > 5  ) {
        return "disqualified";
    } 
    else if (arr[2] > 10 || arr[3] > 10  ) {
        return "disqualified";
    } 
    else if (arr[4] > 15 || arr[5] > 15  ) {
        return "disqualified";
    } 
    else if (arr[6] > 20 || arr[7] > 20  ) {
        return "disqualified";
    } 
    else {
        return "qualified";
    }
}

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120)); 



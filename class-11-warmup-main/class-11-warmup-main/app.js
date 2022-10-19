// Exercise 1
// Evaluate the expression of a and b depending on what operator is (..see defined function below).

function calculate(a, b, operator) {
// let operators = operator
    if (operator === "+") {
        return  a + b
    } else if ( operator === "-") {
        return a - b
    } else {
        return undefined
    }

  // write your logic here
}

calculate(1,1, "+"); // 2
calculate(2, 2, '-'); // 0

console.log(calculate(1,1, "+"))
console.log(calculate(2, 2, '-'))

// switch (operator){
//     case "+":
//     case "-":
//     case "*":
// }


// Exercise 2:=================================================================================
// Given the array

  let list = [
    {
      id: 1, 
      completed: true,
      action: "Study"
    },
    {
      id: 2,
      completed: false, 
      action: "Dishes"
    }
  ]

let printingToPage = `${list.reduce((a, current, ) => {

    a += `
    ID: ${current.id}
    Status: ${current.completed}
    action: ${current.action}
    
    `

}, '')}`

console.log(printingToPage);


function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();

  number();
  
  
//   number(); will log 2  

//================================================================

function sayHello() {
    let say = function () {
      console.log(hello);
    };
    // Local variable that ends up within the closure
    let hello = "Hello, world!";
    return say;
  }
  var sayHelloClosure = sayHello();
  sayHelloClosure();
  
//   console.log(sayHelloClosure()); - will log Hello, world!

//================================================================

// let x = 10;

// function foo(a) {
//   let b = 20;

//     function bar(c) {
//         let d = 30;
//         return boop(x + a + b + c + d);
//     }
//     function boop(e) {
//         console.log(e * -1);
//     }
    
//     return bar;
// }

// // console.log(foo(a))

// let moar = foo(5); // Closure

// moar(15);
  
// //   result is -80

//================================================================


// let y = ('Im a string');

function redundantReturn() {


    function bar(c) {  //c = str('Hey you!');
        
        return newStr(c );
    }
    function newStr(e) {
        console.log(e);
    }
    
    return bar;
}

let str = redundantReturn();

str('Hey you!');

//   result is "Hey you!Im a string"

//================================================================


function parent() {
    
        function parent(x) {
             return newStr (x);
        };

        function newStr(e) {
            console.log(e);
        }
    return parent;
  }
  
  let closure = parent();
  
  
  closure("remembers me");


//   "remembers me"

//================================================================

drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    {name: 'carrot', price: 34}
  ];

drinks.forEach(function(drinks){
    console.log([drinks.name, drinks.price])
})


  const sortDrinkByPrice = drinks.sort(function(c1, c2) {
    if(c1.price < c2.price){
        return 1;
    } else {
        return -1
    }

  }); 

  console.log(sortDrinkByPrice)


// should return [ {name: "lemonade", price: 50}, {name: 'carrot', price: 34}, {name: "lime", price: 10}]

//================================================================


const companies = [
    {start:1981, end:2004},
    {start:1992, end:2008},
    {start:1999, end:2007},
    {start:1989, end:2010}
];

const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
  }, 0);

  console.log(totalYears);


  getBudgets = ([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]);

  const budgetSum = getBudgets.reduce((total, budgetAmount) => 
  total + (budgetAmount.budget ++), 0);

  console.log(budgetSum);

// returns 62600

//   const budgetSum = getBudgets.reduce(function(total, budgetAmount){
//     return total + (budgetAmount.budget ++);
//   }, 0);


//================================================================

  



toArray = ({ shrimp: 15, tots: 12 })  //  ➞    [["shrimp", 15], ["tots", 12]]


let arr = Object.entries(toArray);


for(let i = 0; i< arr.length; i++) {
    console.log(arr[i])
}

// returns 
// ['shrimp', 15]
//  ['tots', 12]

//================================================================


function greatestCommonDivisor(n1, n2) {

    if ((typeof n1 !== 'number') || (typeof n2 !== 'number')) 

      return false;
      n1 = Math.abs(n1);
    n2 = Math.abs(n2);

    while(n2) {
      var t = n2;
      n2 = n1 % n2;
      n1 = t;
    }
    return n1;
  }
  

console.log(greatestCommonDivisor(14, 21)); 

// returns 7
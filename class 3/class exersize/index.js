
// EX 1 ====================================================

function addNum (x, y){
   return x + y
}

const result = addNum(2, 2);

console.log(` Your solution is ${result}`)

// EX 2 ====================================================


const userData = document.querySelector(".userInfo")

const addListBtn  = document.querySelector('.userDataBtn');


const user = [
   { name: "Jerry", 
    age : 38, 
    occupation: "Unemployed"}
]

const newText = (`This is ${user[0].name} he is ${user[0].age} he works at ${user[0].occupation}`);




addListBtn.addEventListener('click', function() {

   const newLi = document.createElement('LI');
   const liContent = document.createTextNode(newText);
   
   newLi.appendChild(liContent);

   userData.appendChild(newLi);
});

// EX 3 ====================================================

function keysAndValues(data) {
   const keys = Object.keys(data),
      values = keys.map(function(key){
         return data[key];
      });
      return[keys, values];
}

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

// EX 4 ====================================================




function order(a, b) {
   if (typeof a != "number" || typeof b != "number")
       return NaN;
   if (b >= a) {
       if (a > b)
           return b;
       return a;
   }
   return b;
 }

 console.log(order(100, 50));

 // EX 5 ====================================================


function exponant(x, y){
   return x ** y
}

console.log(exponant(10, 3))


 // EX 6 ====================================================




var points = new Array(100);

for (var i = 0; i < 100; i++) {
    points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
}

for (var i = 0; i < points.length; i++) {

   


    if(points[i] % 2 == 0) {
      console.log(` ${points[i]} Number is Even `);
    } //This prints the values that you stored in the array

   //  if(points[i] % 5 == 0)
   //  {
    
   //    console.log(` ${points[i]} Number is prime `);
   //  }

    else{

      console.log(` ${points[i]} Number is odd `);
    }
   

}

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(points.length));

// EX 7 ====================================================
 
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
} // specific to clicking window to close modal

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//=================================NOTES =======================
//pull string from newtext

// class="userInfo"


// class="name-list" li for names
// class="changeColor" for button
// class="list Input" type box DO NOT NEED

// const user = [
//     { name: "Jerry", 
//      age : 38, 
//      occupation: "Unemployed"}
//  ]
 
//  const newText = document.createTextNode(`This is ${user[0].name} he is ${user[0].age} he works at ${user[0].occupation}`);
 
//  console.log(newText)

    
for (let i = 1; i <= 100; i++) {
    
    let out = '';
    if (i%3 === 0) out += 'Fizz'; //message = message + 'Fizz'  
    if (i%5 === 0) out += 'Buzz';
    console.log(out || i);
  }


  //    FIRST SOLUTION===========
  // Given numbers 0 - 100;

// For every number that is a multiple of 3, log to the console "Fizz".

//  For every number that is a multiple of 5, log to the console "Buzz". 

//  For every number that is a multiple of 5 and 3, log to the console "Fizz Buzz".

// for ( let x=1; x <=100; x++) {
// if( x % 3 && x % 5) {
//     console.log(x);
//     } else {
//         if (x % 3 == 0) {
//             console.log("Fizz")
//         }
//         if (x % 5 == 0) {
//             console.log("Buzz")
//         }
//     }
// }

// INSTRUCTOR SOLUTION

// for ( let i=1; i <=100; i++) {
//     let out = ''

//     if( i < 3 && i < 5) continue

//     if (i % 3 === 0)out += "Fizz"
//     if (i % 5 === 0) out += "Buzz"
//     if(out !== "") console.log(`${i}: ${out}`)

// }
     
            
        
            
        
    
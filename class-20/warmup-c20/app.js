

// function printDuplicate(arr) {
// const result = []

// for (let i = 0; i < arr.length; i++) {
//     let idx = Math.abs(arr[i]) - 1;
//     let val = arr[idx];

//         if (val < 0 ) {
//             result.push(Math.abs(arr[i]))
//         } else {
//             arr[idx] = -arr[idx]
//         }
 
//     }
//     // return result
//     console.log(result)
// }

// instructor answer


function printDuplicate(arr) {
const duplicates = []

        for (let i = 0; i < arr.length; i++){
            const a = arr[i]

            for (let j = i + 1; j<arr.length; j++){
                const b = arr[j]

                if(a===b && !duplicates.includes(a)) {
                    duplicates.push(a)
                }
            }
        }

        console.log(duplicates)
        return duplicates
}


let numbers = [1, 1, 5, 3, 7, 9, 10, 4, 3, 1];
printDuplicate(numbers); // [1,3]

// console.log(printDuplicate(numbers)); // [1,3]

let characters = ["C", "$", "C", "1", "2", "3", "*", "%", "C", "*"];
printDuplicate(characters); // [C, *]

// const findDuplicates = 
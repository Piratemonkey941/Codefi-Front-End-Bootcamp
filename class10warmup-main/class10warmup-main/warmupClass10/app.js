
//  let arr = []
//  let realArray = [1,2,3,4,5] 
//  for (let index = 0; index < realArray.length; index++) { 
//     const element = realArray[index] 
//     arr.push(element)
//  }

//  console.log(arr)



 function addTwoExceptToOddNumbers(numbers) {
  // write your logic here
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      numbers[i] = numbers[i]+2
    } 
  }
  return numbers
}
 function addTwoExceptToOddNumbers(numbers) {

  // method 2
}
 function addTwoExceptToOddNumbers(numbers) {
  // write your logic here
  return numbers.map((num) => num % 2 === 0 ? num + 2 : num)
}

console.log(addTwoExceptToOddNumbers([1,2,3,4,5])); // [1,4,3,6,5]
console.log(addTwoExceptToOddNumbers([101,1,4,10])); // [101,1,6,12]

//   problem 2=========================================================


const container = document.createElement('div')
document.body.appendChild(container)

const addRedSquare = () => {
  const el = document.createElement('div')
  el.style.width = '200px'
  el.style.height = '200px'
  el.style.backgroundColor = 'red'

  
  container.appendChild(el)

  setTimeout(addRedSquare, 500)
}

addRedSquare()


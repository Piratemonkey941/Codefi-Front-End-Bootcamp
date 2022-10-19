
document.querySelector(".btn").addEventListener("click", colorChange)
function colorChange() {
  var arr = []
  for (let i = 0;i<3;i++) {
    var random = Math.floor(Math.random() * 255)
    arr.push(random)
  }
  document.querySelector("body").style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}

// first I added an event listener to a button with the 
// class "btn" and then I declared a function and declared an 
// empty array in it called "arr" and then I used a for loop 
// and declared a variable called random to generate three random 
// numbers push them to the empty array
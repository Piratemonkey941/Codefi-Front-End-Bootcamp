function myFunction(){
    document.querySelector('h1').style.backgroundColor = "red"
}

// button html

<buttontype "button" onclick = "myFunction"> Set Background Color</button>



document.querySelector("h1").addEventListener("click", colorChange)
function colorChange() {
  var arr = []
  for (let i = 0;i<3;i++) {
    var random = Math.floor(Math.random() * 255)
    arr.push(random)
  }
  document.querySelector("body").style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}



// myFunction is the key that links the button to the javaScript 
// the document.querySelector('h1') is what links the javaScript to the H1 header background code in the window
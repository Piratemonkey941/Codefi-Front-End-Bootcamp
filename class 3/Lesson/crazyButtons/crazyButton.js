// grab what we need

const crazyButtons = document.querySelectorAll('.btn-crazy');

// define functions
function goCrazy(e) {
//get random number for left offset
//get random number for top offset
const button = e.target;
const offsetLeft    = Math.random() * (window.innerWidth - this.clientWidth);
const offsetTop     = Math.random() * (window.innerHeight - this.clientHeight);


console.log(offsetLeft, offsetTop);

// apply numbers to button
this.style.top = offsetTop + 'px';
this.style.left = offsetLeft + 'px'
}
// event listeners

crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
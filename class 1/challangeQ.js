



const constNum =        document.querySelector('name = multipleNum')
const arrayLength =     document.querySelector('name = iterateNum')
const total =           document.querySelector('.total');



const multiples = (constNum, arrayLength) => {
    const res = [];
    for (let i = constNum; i <= constNum * arrayLength; i += constNum){
        res.push(i);
    };
    return res;
    total.innerText = res;
}

console.log(multiples(constNum, arrayLength))

constNum.addEventListener('input')
arrayLength.addEventListener('input')

console.log(res)
//=========================================

// const priceInput =      document.querySelector('[name=price]');
// const quantityInput =   document.querySelector('[name=quantity]');
// const total =           document.querySelector('.total');
// const quantityLabel =   document.querySelector('quantity-label'); 

// // create funtions needed

// function calculatePieCost() {
//     const price = priceInput.value;
//     const quantity = quantityInput.value;
//     const cost = price * quantity;

//     console.log(cost);
//     total.innerText = '$' + cost.toFixed(2);
// }

// function updateQuantityLabel() {
//     const quantity = quantityInput.value;
//     quantityLabel.innerText = quantity;
// }

// calculatePieCost();



// // // add event listeners

// priceInput.addEventListener('input', calculatePieCost);
// quantityInput.addEventListener('input', calculatePieCost);
// quantityInput.addEventListener('input', updateQuantityLabel);
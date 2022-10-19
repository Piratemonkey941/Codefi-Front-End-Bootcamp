


let mosquitoTrapElem = document.getElementById('mosquitoTrapContainer')


function addMosquito(){
    mosquitoTrapElem.appendChild(createMosquito())
}

function createMosquito(){
    let mosquitoElem = document.createElement('img');
    mosquitoElem.setAttribute('src', "./assets/mosquito.webp");
    mosquitoElem.setAttribute('width', '10%')

    // randomize top and left
    mosquitoElem.className = "mosquito"
    
    let x = window.innerWidth;
    let y = window.innerHeight;

    let left = math.random() * x;
    let top = math.random() * y;

    mosquitoElem.style.left = `${left}px`
    mosquitoElem.style.top = `${top}px`

// s4 return element
    return mosquitoElem;
}

function removeMosquito(){
    this.remove();
}



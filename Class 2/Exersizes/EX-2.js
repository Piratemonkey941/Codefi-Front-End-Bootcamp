let menuItems = [
    {name: 'pepperoni' },
    {name:  'supreme'},
    {name: 'cheese'}
    // {name: '' },
];

let menuList = document.getElementById("menuList");

for(let i =0; i < menuItems.length; i++){
    let itemElem = document.createElement('li');
    itemElem.innerText = menuItems [i].name;
    if(menuItems[i].name === 'Supreme'){
        itemElem.style.color = 'green'
    } 
    else if (menuItems[i].name === 'cheese'){
        itemElem.style.fontSize = '50px'
    }

    menuList.appendChild(itemElem)
}

console.log(menuList)



// menuList.appendChild(pizzaElem)
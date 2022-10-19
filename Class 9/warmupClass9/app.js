
const orders = [
    {
      order: "Nachos with Cheese",
      name: "Sandy",
      price: "$13.99",
    },
    {
      order: "Chile Relleno, Burrito, & Rice",
      name: "John",
      price: "$13.99",
    },
    {
      order: "Flauta, Chicken Quesadilla, & Taco",
      name: "Amy",
      price: "$13.99",
    },
  ];
  

function reciteMyOrders(customerOrders) {
    
    for (let i = 0; i < orders.length; i++) {
        console.log(orders[i].order);
        
    }
  }

reciteMyOrders(orders);

console.log(reciteMyOrders)



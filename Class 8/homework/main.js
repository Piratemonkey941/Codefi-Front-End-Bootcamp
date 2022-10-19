// //CLASS =============================================

// // A class is a blueprint for objs

// class User{

//     // instance properties
// username = ''

//     // constructor -> that is executed when an instance is created , built in method
// constructor(newUserName){
//     this.username = newUserName;
//     console.log("instance created")
//     }
//     // methods -> define logic to manipulate data
//     printMyName(){
//         console.log(`my name is ${this.username}`)
//     }
// }



// let user = new User("john123");
// console.log(user)
// user.printMyName();

// let userTwo = new User("Amy123");
// console.log(userTwo)
// user.printMyName();


// // let userExample = {
// //     username: '',
// // }


// //Observer pattern =============================================

// class Observable {
//     subscribers = [];

//     constructor() {}
    

//     subscribe(fn){
//         this.subscribers.push(fn)
//     }

//     unSubscribe(removeFn){
//         this.subscribers = jthis.subscribers.filter((fn) => {
//             return fn != removeFn
//         });
//     }

//     broadcast(value){
//         this.subscribers.forEach((fn)=>{
//             fn(value)
//         });
//     }
// }

// let celebrityObsv = new Observable();
// celebrityObsv.subscribe((event)=>{
//     console.log(`I am going to ${event}.`);
// })

// let celebrityObsv = new Observable();
// celebrityObsv.subscribe((event)=>{
//     console.log(`I am going to ${event}.`);
// })

// const someFan = (event) => {
//     console.log(`I am not going to ${event}.`);
// }


// celebrityObsv.subscribe(someFan)

// celebrityObsv.broadcast("Disco Morning")

// celebrityObsv.unSubscribe(someFan)

// celebrityObsv.broadcast("Fun night concert")
// // console.log(celebrityObsv)

//single page app =============================================




import Navbar from "./shared/navbar.js";
import Home from "./pages/home.js";
// import Settings from "./pages/settings.js";

// initialize the view -> home
new Navbar();
new Home();
// new Settings();





















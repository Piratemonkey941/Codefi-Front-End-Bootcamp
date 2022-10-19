function superHero(name){
    let powerLevel = Math.random() *100;
    return function (catchphrase) {
        console.log(`My name is ${name}. Power level is ${powerLevel} 
        and ${catchphrase}`)
    }
}
let toiletManCatchPhrase = superHero("Toilet Paper Man");
toiletManCatchPhrase("Im Going to wipe the floor with you!");
toiletManCatchPhrase("Did someone say flush");

superHero("Batman")("I AM VENGEANCE") // same input as above by entering arguments

// should return name - PwrLVl - catchphrase 

//problem 2 video 1================================================================

function sum(a) {
    return function (b){
        console.log(a+b)
    }
}

sum(2)(2);

sum(25)(29);

//problem 1 video 2================================================================

let person = {
    firstname:"John",
    age: 35, 
    favoriteIceCream: 'Srawberry',
    vehicle: {
        model: 'Hyundai'
    }
}

console.log(`my name is ${person.firstname}.`);
console.log(`my age is ${person.age}`);
console.log(`My favorite ice cream is ${person.favoriteIceCream}`);
console.log(`I drive a ${person.vehicle.model}`);

//problem 1 video 3 ================================================================

let brotherOne = "Johnny"
let brotherTwo = "Jimmy"
let brotherThree = "James"

console.log (`We are the brothers: ${brotherOne}, ${brotherTwo}, ${brotherThree}`)

const brothers = ["Johny", "Jimy", "James"];

console.log (`We are the brothers: ${brothers[0]}, ${brothers[1]}, ${brothers[2]}`);


const brothersTwo = [
    {
       firstname: "Johny",
       wieght: 150,
    }, 
    {
       firstname: "Jimy",
       wieght: 160,
    }, 
    {
       firstname: "James",
       wieght: 140,
    }
];
console.log (`We are the brothers: ${brothersTwo[0].firstname}, ${brothersTwo[1].firstname}, ${brothersTwo[2].firstname}`);

//problem 1 video 4 ================================================================

console.log("test")

function executeThreeTimes(callback){
    for(let i = 0; i < 3; i++) {
        callback()
    }
}

function printName() {
    console.log("john doe")
}

executeThreeTimes(printName)

let people = ["joe", "jane", "Pam", "michael"]

console.log(`there are ${people.length} people ${people}`)

let peoples = {
    0: "john", 
    1: "joe", 
    2: "jane", 
    3: "jim", 
    length: 4, 
    map: function(callback){
        let newArr = [];
        for(let i = 0; i < this.length; i++){
            // console.log(callback(this[i]))
            newArr.push(callback(this[i]))
        }
        return newArr;
    }
}

// console.log(people[0])
// console.log(people[0])

// console.log(`there are ${peoples.length} people`)

let introductions = peoples.map((person)=>{
    return`My name is ${person}`
})

console.log(introductions)

//problem 1 video 5 THIS ================================================================

console.log(this) // gives window

let personTwo = {
    firstname:"John",
    age: 35, 
    printName: function() {
        console.log(this)
    }
}

let student = {
    name:"jane"
}

// personTwo.printName()

function printName(){
    console.log(this.name)
}

printName.call(student)


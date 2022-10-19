
// const isAnagram = function(first, second){

//     // const fSort = first.split("").sort().join("")
//     // const sSort = second.split("").sort().join("")
//     const fSort = first.split("").sort().join("")
//     const sSort = second.split("").sort().join("")

//     return fSort === sSort
// }

//HASHMAP SOLUTION FROM JAMES

const isAnagram = function(first, second){

const hash1= {}
const hash2= {}

for (const l of first){
    hash1[l] = hash1[l] || 0
    ++hash1[l]
}
for (const l of second){
    hash2[l] = hash2[l] || 0
    ++hash2[l]
}

for (const k in hash1) {
    if(hash1[k] !== hash2[k]) return false
}

return true
}


// isAnagram("cinema", "iceman"); // true 
// isAnagram("organge", "yellow"); //false

console.log(isAnagram("cinema", "iceman"))
console.log(isAnagram("organge", "yellow"))

// Ex 2 =======================================================


function nameCount(name, sentence){ 
    const res  = [...sentence.matchAll(name)]
    return res.length
}


let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

console.log(nameCount(person, sentence));





// const str2 = "My grandfather is 65 years old and My grandmother is 63 years old."


// console.log(str2.match(65))

// first attempt 
// const nameCounter = function( person,announcement){ //

//     const sortAnnouncement = announcement.split("").sort(person).join("")

// return sortAnnouncement
// }

// console.log(nameCounter())

// let person = "John";
// let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

// nameCount(person, sentence); // 3


// Given two strings. One string representing a name. The second string representing a sentence.

// Return the count of how many times the name appears in the sentence.
// const name = "muhammad    "

// console.log(name.trueLength)

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.muh = function(){
    console.log("muh present in the all ")
}

// myHeros.muh()
// heroPower.muh()

Array.prototype.arrMuh = function(){
    console.log(`Hitesh says hello`);
}


// myHeros.arrMuh() //  work because myHeros is array not object
// heroPower.arrMuh()// not work because heroPower is object not array

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User   // ✅ Teacher object کو User سے link کیا گیا (prototype inheritance)

// 🧩 1. یہ صرف TASupport کی اپنی properties دکھائے گا (prototype کی نہیں)
console.log(TASupport)  

// 🧩 2. یہ TeachingSupport سے inherited property access کرے گا
console.log(TASupport.isAvailable)  

// 🧩 3. یہ TASupport کے prototype (یعنی TeachingSupport) کو دکھائے گا
console.log(TASupport.__proto__)   

// 🧩 4. یہ بھی prototype دکھائے گا (modern, recommended syntax)
console.log(Object.getPrototypeOf(TASupport)) 

// modern way to set prototype
Object.setPrototypeOf(Teacher, User)
console.log(Teacher.makeVideo)
console.log(Teacher.email) // inherited from User


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()





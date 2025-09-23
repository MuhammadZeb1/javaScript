// singleton
// object.create

// object literal
 const sym = Symbol("hi")
 const obj = {
     
     name:"ali",
     "full name":"muhammad zeb",
     rollNo : 33,
     [sym]:sym
}

// console.log(obj["full name"])
// console.log(obj.name)
// console.log(obj[sym])


obj.name = "khsn"

obj.greeting = function (){
     console.log(`hello ${this.name}`)
}

console.log(obj.greeting())

// Object.freeze(obj)
// obj.name = ""
// console.log(obj)
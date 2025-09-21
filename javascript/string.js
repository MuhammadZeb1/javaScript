const name = "ali" // string => primitive data type
const num = 10 // number => primitive data type
const str = "this is string" // string => primitive data type

// console.log(name + str + "ali khan")

// console.log(`my name is ${name} and i am ${num} years old`)

// second method of the string 

const gameName = new String("cricket")

// console.log(gameName[0])
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())

// charAt () tell the index of the character
//  console.log(gameName.charAt(2))

// //  indexOf () tell the index of the character
// //  console.log(gameName.indexOf('c'))


// substring () it will give the string from the index you want to start include  and end exclude(ingore the negative value)
// console.log(gameName.substring(0,4))

// slice () it will give the string from the index you want to start include  and end exclude (we can also use negative index in slice method)
// console.log(gameName.slice(0,4))
// console.log(gameName.slice(-5,4))

// trim () use for the white space 

// const newStr = "     hello world     "
// console.log(newStr.trim())

// replace () use for the replace the string
const myStr = "hello world"
console.log(myStr.replace("world", "ali"))

// includes () use for the check the string is present or not it will return boolean value
console.log(myStr.includes("hello"))

// splite() use for the splite the string 

const spliteStr = myStr.split(" ")

console.log(spliteStr)
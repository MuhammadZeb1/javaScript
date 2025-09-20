/* how to store data and how to  acess the data on this bases the data 
    divided in to parts */


// primitive data types (call by value ) .. it gives the copy of the valuse not give the refrence of original data or value 


//   seven data types 
/* null string , number , boolean, undefined ,symbol ,
bigInt
*/

/*
const num = 3454 // number Data Type
const str = "3454" // string Data Type  we use that ""
const bole = true // bolean Data Type  we use that false
const n= null // null => standalone value "khali"
The Reason

(In the very early implementation of JavaScript (1995), values were represented using type tags in their binary form.

Objects were given the tag 000.

Accidentally, null was also represented as 00000000.

So, when typeof checks it, it mistakenly treats null as an "object".

🔹 Important Point

null is NOT an object.)

It is actually a primitive data type that represents the intentional absence of any value.

But this bug is kept for backward compatibility, because fixing it would break a lot of old JavaScript code.
let und = undefined // undefined => not assign 
const sym = Symbol("this is symbol") // Symbol => unique
const sym1 = Symbol("this is symbol") // Symbol => unique
console.log(sym === sym2) // false
const bigInt = 1234567890123456789012345678901234567890n // bigInt => larger than 2^53 -1
*/
/*console.log(typeof num) // number
console.log(typeof str) // string
console.log(typeof bole) // boolean
console.log(typeof n) // object
console.log(typeof und) // undefined
console.log(typeof sym) // symbol
console.log(typeof bigInt) // bigint
*/

// non primitive data types (are those which allocite the refernce of original data )
// also called refrence data types

// Array , Objects , functions
//  const arr = [1,2,3,4,5] // array
//     const obj = {name : "harry" , age : 34} // object
//    let myFun = function (){ // function
//         console.log("this is function")
//     }

    /*
    console.log(typeof arr) // object
    console.log(typeof obj) // object
    console.log(typeof myFun) // function
    */



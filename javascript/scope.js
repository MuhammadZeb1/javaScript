// scope in js 

// {} block scope 

// let a = 9;
// const b = 10;
// var c = 11;

if (true) {
    let a = 9;
const b = 10;
var c = 11;
}

// console.log(a);
// console.log(b);
// console.log(c);// output 11 

// function testFunction() {
//   let localVar = "I am local";
//   console.log(localVar); // ✅ Accessible
// }

// console.log(localVar); // ❌ Error

// testFunction();

// local scope : are the scope inside the function 
// global scope : are the scope outside the function
// block scope : are the scope inside the block


// nested function 

// function one (){
//     const name = "ali"

//     function two (){

//         const lName = "khan"
        
//         console.log(name)
//     }
//         console.log(lName)

//         two()

// }

// one()\




greet(); // Hello, World!
function greet() {//// ✅ Named function (named function declaration)
  console.log("Hello, World!");
}


const greet = function() {//❌ No name(Anonymous function)
  console.log("Hello from Function Expression!");
};
greet();


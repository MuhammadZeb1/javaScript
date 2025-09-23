const number = [1,2,23,4,4,4,]  // number array and 1 method of the array
const myArray = new Array("ali","khan",)  // 2 method of the array

// console.log(number.length) // 7
// console.log(myArray.length) // 2

// number.push(45)// add 45 in the last of the array
// console.log(number)

// number.pop()// remove last element of the array
// console.log(number)

// number.shift()// remove first element of the array
// console.log(number)

// number.unshift(99)// add 99 in the first of the array'
// console.log(number)

// console.log(number.indexOf(4))// 3 (first index of 4)

// console.log(number.indexOf(44))// -1 (not found)

// console.log(number.includes(4))// true (found)
// console.log(number.includes(44))// false (not found)

// let numbers = [1, 2, 3, 4, 5];

// console.log(number.join());      // "1,2,3,4,5"
// console.log(number.join(" - ")); // "1 - 2 - 3 - 4 - 5"
// console.log(number.join(""));    // "12345"


// let arr = [10, 20, 30, 40, 50];
// slice does not change the original array

// console.log(arr.slice(1, 3)); // [20, 30]
// console.log(arr.slice(2));    // [30, 40, 50]
// console.log(arr.slice(-2));   // [40, 50]

// splice change the original array

// remove elements from an array using splice and return the removed elements
let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2);

// console.log(arr); // [10, 40, 50]
// console.log(arr); // [10, 40, 50]
//  splice(startIndex, deleteCount, item1, item2, ...)
// add elements to an array using splice
arr.splice(0, 4, 25, 27);
console.log(arr); // [10, 25, 27, 40, 50]



const number = [1,2,23,4,4,4,]  // number array and 1 method of the array

const names = ["ali","khan","ahmad","umer","umer"]  // 2 method of the array

// number.push(names) // add names array in the last of the number array(as an array or elemnt of the array)
// console.log(number)// [ 1, 2, 23, 4, 4, 4, [ 'ali', 'khan', 'ahmad', 'umer', 'umer' ] ]
// console.log(number[6][3])// umer


// concetenate two arrays (merge two arrays)
// let newArray = number.concat(names)
// console.log(newArray)// [ 1, 2, 23, 4, 4, 4, 'ali', 'khan', 'ahmad', 'umer', 'umer' ]

// let newArray = [...number,...names] // spread operator(it remove the array structure 
// and add the elements of the array)
// console.log(newArray)// [ 1, 2, 23, 4, 4, 4, 'ali', 'khan', 'ahmad', 'umer', 'umer' ]


// flat methods  (it remove the array structure and add the elements of the array)
// let newArray = [1,2,3,[4,5,6],[7,8,9]]
// console.log(newArray.flat())// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// let newArray = [1,2,3,[4,5,[6,7]],[8,9]]
// console.log(newArray.flat(2))// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// isArray method
// console.log(Array.isArray(number))// true
// console.log(Array.isArray("ali"))// false


// from methods 

// console.log(Array.from("ali"))// [ 'a', 'l', 'i' ]
// console.log(Array.from(["ali","khan"]))// [ 'ali', 'khan' ]
// console.log(Array.from({name:"ali",age:22}))// [] (not iterable)

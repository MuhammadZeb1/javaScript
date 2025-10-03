// const obj = new Object() // singleton object 

// console.log("obje",obj)

const obj = {}// object letural 

obj.id="33334"
obj.name="muhammad zeb "
obj.greeting=function(){
    console.log(`hello ${this.name}`)
}
// console.log("obj",obj.greeting())

// const nestObj = {
//     id:"3434",
//     fullName :{
//         userName:{
//             firstName:"muhammad",
//             lastName:"zeb"
//         }
//     }
// }

// console.log("nestObj",nestObj.fullName.userName.firstName)

const obj2 = {1: "one", 2: "two", 3: "three",}
const obj3 ={4:"four",5:"five"}

// const newObj = Object.assign({},obj2,obj3)// merge two object
// const newObj = Object.assign(obj2,obj3)// merge two object

// const newObj = {...obj2,...obj3} // spread operator

// console.log("newObj",newObj)

// array like object
// const arrLikeObj = {
//     0:"muhammad",
//     1:"zeb",
//     length:2
// }
// console.log("arrLikeObj",arrLikeObj[0])

// Array of object 

// const arrayOfObj = [
//     {id:1,name:"muhammad"},
//     {id:2,name:"zeb"},
//     {id:3,name:"ahmad"},
// ]
// console.log("arrayOfObj",arrayOfObj[1].name)
  
console.log("obj",Object.keys(obj))// return array of keys
console.log("obj",Object.values(obj))// return array of values
console.log("obj",Object.entries(obj))// return array of array key value pair
console.log("obj",Object.hasOwn(obj,"id"))// return boolean if key exist or not
console.log("obj",Object.hasOwnProperty(obj,"age"))// return boolean if key exist or not



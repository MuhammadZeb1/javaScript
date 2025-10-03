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

const newObj = {...obj2,...obj3} // spread operator

console.log("newObj",newObj)

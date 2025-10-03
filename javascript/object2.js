// const obj = new Object() // singleton object 

// console.log("obje",obj)

const obj = {}// object letural 

obj.id="33334"
obj.name="muhammad zeb "
obj.greeting=function(){
    console.log(`hello ${this.name}`)
}
// console.log("obj",obj.greeting())

const nestObj = {
    id:"3434",
    fullName :{
        userName:{
            firstName:"muhammad",
            lastName:"zeb"
        }
    }
}

console.log("nestObj",nestObj.fullName.userName.firstName)
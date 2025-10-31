const user = {
    userName :"muhammad zeb",
    login :true,

    met : ()=>{
        console.log("fetch the data from the database ")
    }
}
// console.log(user.met())


// constructor function
function User (name , roll){
    this.name = name 
    this.roll = roll
    return this 
}

const userOne = new User("ali",55)
const userTwo = new User("ali",55)
console.log(userOne)
console.log(userTwo)



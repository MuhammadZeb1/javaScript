function add (num){
    return num +5
}

add.power = 8

// console.log(add(5))
// console.log(add.power)
// console.log(add.prototype)

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function() {
  console.log(`Username: ${this.username}, Score: ${this.score}`);
}


const chai = new createUser("chai", 25)
chai.increment()
chai.printMe()
// this keyword refer the current context of the object
// const obj = {
//     name :"muhammad zeb ",
//       rollNo :33,
//       greeting : function(){
//           console.log(`hello ${this.name}`)
//           console.log(this)// show the current context
//         }
//     }

    // obj.greeting()
    // obj.name = "ali"
    // obj.greeting()
    // this refer the current context of the function

    // console.log(this)// in node refer the empty object {} (and browser refer the window  object )


    // function chai (){
    //   const username = "ali"
    //   console.log(this.username)//undefined(work only the object)
    // }

    // chai()

     const chai= ()=>{
      const username = "ali"
      console.log(this) //{}
    }

    chai()
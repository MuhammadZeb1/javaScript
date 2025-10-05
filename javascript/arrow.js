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
    // 3. Anonymous Function

// A function without a name is called an anonymous function.
  //  function (){
  //   console.log(jjj)
  //  }

    //  const chai= (num, num)=>{ // exp return
    //   return mum +num
    // }

    // chai(3,4)
    //  imp return
    //  const chai= (num , num2)=> num + num2
    //  const chai= (num , num2)=> (num + num2)
     const chai= (num , num2)=> ({name:"ali", rollNo:33})// object


   console.log( chai(3,4))
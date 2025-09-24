import { useState } from "react"

const fun = (name)=>{
  alert(name)
}
function App() {
    const [num,setNum]= useState(["khan","ali","waqif"])
    const [inc, setInc]= useState(0)
      
    const change = ()=>{
      setInc(inc+1)
      
      console.log(inc)
      
    }
  return (
    <>
      
      <h1>{inc< num.length?num[inc]:"out"}</h1>
      <button onClick={change}>click me</button>
    </>
  )

 
}

export default App

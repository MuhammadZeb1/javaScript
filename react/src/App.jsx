import { useState } from "react"

const fun = (name)=>{
  alert(name)
}
function App() {
    const [num,setNum]= useState(["khan","ali","waqif"])
    const [inc, setInc]= useState(true)
    
    const change = ()=>{
      setInc(!inc)
      console.log(inc)
      
      
      console.log(inc)
      
    }
  return (
    <>
      
      <h1>{}</h1>
      <button onClick={change}>click me</button>
    </>
  )

 
}

export default App

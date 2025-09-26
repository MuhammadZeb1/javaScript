import React, { useState } from 'react'
import User from './User'
import Iput from './Iput'
import Skills from './Skills'
import Radio from './Radio'
import UserData from './UserData'
import MapCom from './resuable/MapCom'
import Effect from './Effect'

function App() {
  const [count, setCount] = useState(1)
  const [color , setColor] = useState(["red", "green", "blue"])
  const [name, setName] = useState(["ali", "khan", "zeb"])
  

 const change = () => {
    setCount((prev) => (prev + 1) % name.length) // array کے اندر ہی رہنے کے لیے
    console.log(count)
  }

  return (

    <>
    <h1 className='heading'>kkk</h1>
    <Effect/>
    {/* <MapCom/> */}
    {/* <UserData/> */}
    {/* <Radio/> */}
    {/* <Skills/> */}
    <Iput/>
    </>
  //   <div>
  // <div>
  //     <button onClick={change}>Click me</button> 
      
  //     {/* count کے حساب سے name show کریں */}
  //     <h1>{name[count]}</h1>  

  //     <hr />

  //     {/* User component کو name prop دیں */}
  //     <User name={name[count]} color={color[count]}> 
  //       <h1>'hello'</h1>
  //     </User>
  //   </div>

  //     <h1>{count}</h1>

  //     <div>
  //       <h1>{count}</h1>
  //       {/* ✅ یہاں ہم arrow function use کریں گے */}
  //       {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
  //     </div>

  //     {/* ✅ Condition rendering */}
  //     {/* {count === 0 ? (
  //       <h1>Condition 0</h1>
  //     ) : count === 1 ? (
  //       <h1>Condition 1</h1>
  //     ) : null} */}
  //   </div>
  )
}

export default App

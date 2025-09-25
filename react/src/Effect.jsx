import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect called")
        funCall(); 
    }, []) // جب count change ہو تب جا کے useEffect چلے گا
    const funCall = () => {
        console.log("function called")
    }
  return (
    <>
    <div>Effect</div>
    <button onClick={() => setCount(count + 1)} >Click {count}</button>
    </>
  )
}

export default Effect
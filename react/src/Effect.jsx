import React, { useEffect, useState } from 'react'
// import './css/Style.css'
import styled from 'styled-components'



function Effect() {
    const [count, setCount] = useState(0);

    const H2 = styled.h2`
    background-color: blue;`

    useEffect(() => {
        console.log("useEffect called")
        funCall(); 
    }, []) // جب count change ہو تب جا کے useEffect چلے گا
    const funCall = () => {
        console.log("function called")
    }
  return (
    <>
    {/* <div className={style.heading}>Effect</div> */}
    <H2>Styled Component</H2>
    <button onClick={() => setCount(count + 1)} >Click {count}</button>
    </>
  )
}

export default Effect
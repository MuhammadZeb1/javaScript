import React from 'react'

function ShowUser({user}) {
  return (
    <div style={{border:"1px solid black", margin:"10px", padding:"10px"}}>

        <h1>{user.name}</h1>
        <h1>{user.gender}</h1>
    </div>
  )
}

export default ShowUser
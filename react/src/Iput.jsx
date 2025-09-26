import React from 'react'

function Iput() {
    const [name , setName] = React.useState("")
  return (
    <div>

        <input type="text" placeholder='user name' value={name} onChange={(e) => setName(e.target.value)} />
        <h1 className='heading'>{name}</h1>
        <h1 className='heading'>name</h1>
        <button onClick={() => setName("")}>clear</button>
    </div>
  )
}

export default Iput
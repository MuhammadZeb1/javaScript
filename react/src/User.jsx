import React from 'react'

function User( props ) {
    console.log(props)
  return (
    <div>User {props.name}</div>
  )
}

export default User
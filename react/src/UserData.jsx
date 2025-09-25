import React from 'react'

function UserData() {
    const userData = [
  { id: 1, name: "Ali", gender: "male" },
  { id: 2, name: "Sara", gender: "female" },
  { id: 3, name: "Zain", gender: "male" },
  { id: 4, name: "Ayesha", gender: "female" }
];

  return (
    <>
    <h1>UserData</h1>
    <table border={1}> 
        {
            userData.map((user)=>{
                return(
                   <tbody key={user.id}>
                     <tr >
                        <td>{user.id}</td><td>{user.name}</td><td>{user.gender}</td>
                    </tr>
                   </tbody>
                )
            })
        }
    </table>
    </>
  )
}

export default UserData
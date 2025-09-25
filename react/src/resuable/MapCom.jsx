import React from 'react'
import ShowUser from './ShowUser';

function MapCom() {
  const userData = [
    { id: 1, name: "Ali", gender: "male" },
    { id: 2, name: "Sara", gender: "female" },
    { id: 3, name: "Zain", gender: "male" },
    { id: 4, name: "Ayesha", gender: "female" }
  ];

  return (
    <>
      <h1>Reuse Component</h1>
      <div>
        {userData.map((user) => (
          <ShowUser user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default MapCom;

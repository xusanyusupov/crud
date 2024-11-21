import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"

function Users({data,handleDelete}) {
  return (
    <div className='users__wrapper'> 
      {data?.map(user=> (
           <div key={user.id} className="users__card">
           <img src={user.gender === "male" ? male : female} alt="" />
           <h2>{user.name}</h2>
           <p>{user.profession}</p>
           <p>{user.age} years old </p>
           <button onClick={() => handleDelete(user.id)}>Remove</button>
       </div>
      ))}
    </div>
  )
}

export default Users
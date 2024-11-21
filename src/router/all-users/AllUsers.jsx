import React from 'react'
import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromUser } from '../../context/userSlice'  

function AllUsers() {
  let users = useSelector(state => state.users.value)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeFromUser(id))  
  }

  return (
    <div className='all__users'>
      {
        users.length ? 
          <Users data={users} handleDelete={handleDelete} /> : 
          <Empty />
      }
    </div>
  )
}

export default AllUsers

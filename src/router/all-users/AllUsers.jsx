
// import React from 'react';
// import "./AllUsers.css";
// import Users from '../../components/users/Users';
// import Empty from '../../components/empty/Empty';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromUser } from '../../context/userSlice';

// function AllUsers() {
//   let users = useSelector(state => state.users.value);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(removeFromUser(id));  
//   };

//   const handleEdit = (user) => {
//     console.log("Edit user:", user); 
//   };

//   return (
//     <div className='all__users'>
//       {
//         users.length ? 
//           <Users 
//             data={users} 
//             handleDelete={handleDelete} 
//             handleEdit={handleEdit} 
//           /> : 
//           <Empty />
//       }
//     </div>
//   );
// }

// export default AllUsers;

import React, { useState } from 'react';
import "./AllUsers.css";
import Users from '../../components/users/Users.jsx'
import Empty from '../../components/empty/Empty';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromUser, updateUser } from '../../context/userSlice';

function AllUsers() {
  let users = useSelector(state => state.users.value);
  const dispatch = useDispatch();

  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeFromUser(id));  
  };

  const handleEdit = (user) => {
    setEditingUser(user); // Tahrirlash uchun tanlangan foydalanuvchini saqlash
  };

  const handleUpdate = (updatedUser) => {
    dispatch(updateUser(updatedUser)); // Redux orqali foydalanuvchini yangilash
    setEditingUser(null); // Tahrirlash rejimidan chiqish
  };

  return (
    <div className='all__users'>
      {users.length ? (
        <Users 
          data={users} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit} 
        />
      ) : (
        <Empty />
      )}
      {editingUser && (
        <div className='edit__user-form'>
          <h3>Edit User</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingUser);
            }}
          >
            <input
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              type='text'
              placeholder='name'
            />
            <input
              value={editingUser.profession}
              onChange={(e) =>
                setEditingUser({ ...editingUser, profession: e.target.value })
              }
              type='text'
              placeholder='profession'
            />
            <input
              value={editingUser.age}
              onChange={(e) =>
                setEditingUser({ ...editingUser, age: e.target.value })
              }
              type='number'
              placeholder='age'
            />
            <select
              value={editingUser.gender}
              onChange={(e) =>
                setEditingUser({ ...editingUser, gender: e.target.value })
              }
            >
              <option value=''>gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            <button type='submit'>Update</button>
            <button type='button' onClick={() => setEditingUser(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AllUsers;

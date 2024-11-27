
import React, { useState } from 'react';
import "./CreateUser.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToUser, updateUser } from '../../context/userSlice';


function CreateUser() {
  const [name, setName] = useState(""); // Name
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      id: isEditing ? editId : new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
    };

    if (isEditing) {
      dispatch(updateUser(user));
      setIsEditing(false);
    } else {
      dispatch(addToUser(user));
    }

    resetForm();
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditId(user.id);
    setName(user.name);
    setProfession(user.profession);
    setAge(user.age);
    setGender(user.gender);
  };

  const resetForm = () => {
    setName("");
    setProfession("");
    setAge("");
    setGender("");
    setEditId(null);
  };

  return (
    <div className='create__user'>
      <h2>{isEditing ? "Edit User" : "Create User"}</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
        <input required value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder='profession' />
        <input required value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='age' />
        <select required value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
          <option value="">gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type='submit'>{isEditing ? "Update" : "Create"}</button>
      </form>    
    </div>
  );
}

export default CreateUser;

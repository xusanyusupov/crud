// import { createSlice } from "@reduxjs/toolkit";



// export const userSlice = createSlice({
//     name: "users",
//     initialState:{
//         value:[]
//     },
//     reducers: {
//         addToUser(state,action){
//             state.value = [...state.value, action.payload]
//         },
//         removeFromUsers(state,action){
//             state.value = state.value.filter(user => user.id !== action.payload.id)
//         }
//     }
// })

// export const { addToUser, removeFromUsers} = userSlice.actions
// export default userSlice.reducer

// userSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: []
  },
  reducers: {
    addToUser: (state, action) => {
      state.value.push(action.payload)
    },
    removeFromUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload)
    }
  }
})

export const { addToUser, removeFromUser } = usersSlice.actions

export default usersSlice.reducer

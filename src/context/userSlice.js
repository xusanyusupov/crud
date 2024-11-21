
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

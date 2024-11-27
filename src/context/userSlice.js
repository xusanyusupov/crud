// import { createSlice } from "@reduxjs/toolkit";

// export const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     value: [],
//   },
//   // reducers: {
//   //   addToUser: (state, action) => {
//   //     state.value.push(action.payload)
//   //   },
//   //   removeFromUser: (state, action) => {
//   //     state.value = state.value.filter(user => user.id !== action.payload)
//   //   },
//   reducers: {
//     addToUser: (state, action) => {
//       state.value.push(action.payload);
//     },
//     removeFromUser: (state, action) => {
//       state.value = state.value.filter((user) => user.id !== action.payload);
//     },
//     updateUser: (state, action) => {
//       const index = state.value.findIndex(
//         (user) => user.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.value[index] = action.payload;
//       }
//     },
//   },
// });

// export const { addToUser, removeFromUser } = usersSlice.actions;

// export default usersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    addToUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.value.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = action.payload; 
      }
    },    
  },
});

// Ekspor qilayotgan actionlarni tekshiring
export const { addToUser, removeFromUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';  // Correct import

const initialState = {
  currUser: null,
};

const userSlice = createSlice({  // Correct name for the slice
  name: 'userCreate',  // Corrected the name to match convention
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currUser = action.payload;
    },
    clearUser:(state)=>{
        state.currUser=null
    }
  },
});

export const { addUser,clearUser } = userSlice.actions;  // Correctly accessing actions
export default userSlice.reducer;  // Export the reducer

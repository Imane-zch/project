//store user authentication details


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





export const authSlice = createSlice({
  name: "user",
  initialState: {
    
  },
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload
     
      
     
    },
  },
});


export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentidToken = (state) => state.auth.value
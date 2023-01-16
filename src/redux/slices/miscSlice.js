import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    showPassword: {
      status: false,
    },
    
  },

  reducers: {
    setShowPassword: (state, {payload}) => {
      state.showPassword = {
        status: payload?.status
      };
    },
  },
});

export const {setShowPassword} = miscSlice.actions;
export default miscSlice.reducer;

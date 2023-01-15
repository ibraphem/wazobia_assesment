import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: ""
};

export const registerUser = createAsyncThunk(
    "user/register",
    async (arg) => {
      return httpRequest(`${BASE_URL}/user/signup`, 'post', arg.payload);
    }
  );

  const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(registerUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.data?.user;
        state.token = action.payload?.data?.token;
        state.error = "";
      });
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action?.payload?.message;
      });
    },
  });

  export default userSlice.reducer;
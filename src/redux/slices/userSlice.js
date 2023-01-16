import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    user: null,
    token: null,
    loading: false,
    vLoading: false,
    vData: "",
    error: null,
    sLoading: false,
    sError: null
};

export const registerUser = createAsyncThunk(
    "user/register",
    async (arg) => {
      return httpRequest(`${BASE_URL}/user/signup`, 'post', arg.payload);
    }
  );

  export const verifyEmail = createAsyncThunk(
    "user/verify-email",
    async (arg) => {
      return httpRequest(`${BASE_URL}/user/verify/${arg.code}`);
    }
  );

  export const signin = createAsyncThunk(
    "user/signin",
    async (arg) => {
      return httpRequest(`${BASE_URL}/user/signin`, 'post', arg.payload);
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
        state.error = action.payload?.status === false ? action?.payload?.message : "";
      });
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action?.payload?.message;
      });

      builder.addCase(verifyEmail.pending, (state) => {
        state.vLoading = true;
      });
      builder.addCase(verifyEmail.fulfilled, (state, action) => {
        console.log(action?.payload);
        state.loading = false;
        state.user = action.payload?.data?.user ? action.payload?.data?.user : state.user;
        state.vData = action?.payload
      });
      builder.addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
      });


      builder.addCase(signin.pending, (state) => {
        state.sLoading = true;
      });
      builder.addCase(signin.fulfilled, (state, action) => {
        state.sLoading = false;
        state.user = action.payload?.data?.user;
        state.token = action.payload?.data?.token;
        state.sError = action.payload?.status === false ? action?.payload?.message : "";
      });
      builder.addCase(signin.rejected, (state, action) => {
        state.sLoading = false;
        state.user = null;
        state.sError = action?.payload?.message;
      });
    },
    reducers: {
      removeUser: (state) => {
          state.user = null
          state.token = null
      }
  }
  });

  export default userSlice.reducer;
  export const {removeUser} = userSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    loading: false,
    res: null,
};

export const resendEmail = createAsyncThunk(
    "emailResend/user",
    async () => {
      return httpRequest(`${BASE_URL}/user/resend-verification-mail`);
    }
  );

  const emailResendSlice = createSlice({
    name: "emailResend",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(resendEmail.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(resendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.res = action.payload;
      });
      builder.addCase(resendEmail.rejected, (state, action) => {
        state.loading = false;
      });
    },
  });

  export default emailResendSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    items: [],
    loading: false,
    error: ""
};

export const fetchItems = createAsyncThunk(
    "items/fetch",
    async () => {
      return httpRequest(`${BASE_URL}/items`);
    }
  );

  const itemsSlice = createSlice({
    name: "items",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchItems.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data;
        state.error = "";
      });
      builder.addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.items = {};
        state.error = "Error, Failed to load items";
      });
    },
  });

  export default itemsSlice.reducer;
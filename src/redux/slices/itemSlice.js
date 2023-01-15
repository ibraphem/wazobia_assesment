import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/settings";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    items: [],
    loading: false,
    addEditLoading: false,
    deleteLoading: false,
    error: ""
};

export const fetchItems = createAsyncThunk(
    "items/fetch",
    async () => {
      return httpRequest(`${BASE_URL}/items`);
    }
  );

  export const saveItem = createAsyncThunk(
    "items/save",
    async (arg) => {
      return httpRequest(`${BASE_URL}/items/save`, 'post', arg?.payload);
    }
  );

  export const updateItem = createAsyncThunk(
    "items/update",
    async (arg) => {
      return httpRequest(`${BASE_URL}/items/${arg?.id}`, 'put', arg?.payload);
    }
  );

  export const deleteItem = createAsyncThunk(
    "items/delete",
    async (arg) => {
      return httpRequest(`${BASE_URL}/items/${arg?.id}`, 'delete',);
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


      builder.addCase(saveItem.pending, (state) => {
        state.addEditLoading = true;
      });
      builder.addCase(saveItem.fulfilled, (state) => {
        state.addEditLoading = false;
      });
      builder.addCase(saveItem.rejected, (state) => {
        state.addEditLoading = false;
      });


      builder.addCase(updateItem.pending, (state) => {
        state.addEditLoading = true;
      });
      builder.addCase(updateItem.fulfilled, (state) => {
        state.addEditLoading = false;
      });
      builder.addCase(updateItem.rejected, (state) => {
        state.addEditLoading = false;
      });

      builder.addCase(deleteItem.pending, (state) => {
        state.deleteLoading = true;
      });
      builder.addCase(deleteItem.fulfilled, (state) => {
        state.deleteLoading = false;
      });
      builder.addCase(deleteItem.rejected, (state) => {
        state.deleteLoading = false;
      });
    },
  });

  export default itemsSlice.reducer;
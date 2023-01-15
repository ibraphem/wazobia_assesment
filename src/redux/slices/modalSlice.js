import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    itemModal: {
      status: false,
      item: null,
    },
    
  },

  reducers: {
    setItemModal: (state, { payload }) => {
      state.itemModal = {
        status: payload.status,
        item: payload.item,
      };
    },
  },
});

export const {setItemModal} = modalSlice.actions;
export default modalSlice.reducer;

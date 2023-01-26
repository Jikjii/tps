import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPanels } from "./panelAPI";

export const panelSlice = createSlice({
  name: "panel",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: [],
    },
    save: {
      isSaving: false,
      isDeleting: false,
    },
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO updated to make a valid clear message
    },
  },
  extraReducers: {
    [getPanels.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getPanels.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload;
      state.list.isLoading = false;
    },
    [getPanels.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
    // TODO: Add extra resolver

    
  },
});

export default panelSlice.reducer;

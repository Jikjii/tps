import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// GET ALL PANELS

export const getPanels = createAsyncThunk("api/panels", async () => {
  try {
    // get the rep some the frontend and post the panels
    const response = await api.get("panels")
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// export const deletePanel = createAsyncThunk("api/panels")
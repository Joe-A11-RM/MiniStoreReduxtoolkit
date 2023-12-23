import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("get/categories", async () => {
  const res = await axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => res.data);
  return res;
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.error = true;
      state.loading = true;
    });
  },
});

export default categorySlice.reducer;

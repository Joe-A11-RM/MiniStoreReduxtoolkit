import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getpopular = createAsyncThunk("get/popularproducs", async () => {
  const res = await axios
    .get("https://fakestoreapi.com/products?offset=8&limit=8")
    .then((res) => res.data);
  return res;
});

export const popularproductSlice = createSlice({
  name: "popularproduct",
  initialState: {
    PopularProducts: [],
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpopular.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getpopular.fulfilled, (state, action) => {
        state.PopularProducts = action.payload;
        state.loading = false;
      });
    builder.addCase(getpopular.rejected, (state) => {
      state.error = true;
    });
  },
});
export default popularproductSlice.reducer;

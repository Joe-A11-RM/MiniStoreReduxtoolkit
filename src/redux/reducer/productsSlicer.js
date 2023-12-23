import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproducts = createAsyncThunk("get/products", async () => {
  const res = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
  return res;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    Products: [],
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getproducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getproducts.fulfilled, (state, action) => {
      state.Products = action.payload;
      state.loading = false;
    });
    builder.addCase(getproducts.rejected, (state) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;

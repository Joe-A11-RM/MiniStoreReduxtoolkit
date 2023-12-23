import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getnewProducts = createAsyncThunk("get/new", async () => {
  const res = await axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.data);
  return res;
});
export const newproductsSlice = createSlice({
  name: "newproducts",
  initialState: {
    newProducts: [],
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getnewProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getnewProducts.fulfilled, (state, action) => {
      state.newProducts = action.payload;
      state.loading = false;
    });
    builder.addCase(getnewProducts.rejected, (state) => {
      state.error = true;
    });
  },
});

export default newproductsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproductdetails = createAsyncThunk(
  "get/productdetails",
  async (params) => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${params}`)
      .then((res) => res.data);
    return res;
  }
);
export const productdetailsSlice = createSlice({
  name: "productdetails",
  initialState: {
    details: [],
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getproductdetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getproductdetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
    });
    builder.addCase(getproductdetails.rejected, (state) => {
      state.error = true;
    });
  },
});

export default productdetailsSlice.reducer;

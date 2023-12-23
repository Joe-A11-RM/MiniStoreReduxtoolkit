import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addtoCart = createAsyncThunk(
  "addtocart/user",
  async ({ userid, pid, no }) => {
    console.log("User Id " + userid);
    console.log("Product ID" + pid);
    console.log("Quantity" + no);
    const res = await axios
      .post("https://fakestoreapi.com/carts", {
        userId: userid,
        date: "2020-02-03",
        products: [{ productId: pid, quantity: no }],
      })
      .then((res) => res.data);
    return res;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartdetails: {},
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addtoCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addtoCart.fulfilled, (state, action) => {
      state.cartdetails = action.payload;
      state.loading = false;
    });
    builder.addCase(addtoCart.rejected, (state) => {
      state.error = true;
    });
  },
});
export default cartSlice.reducer;

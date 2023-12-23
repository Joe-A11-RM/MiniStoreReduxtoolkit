import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userlogin = createAsyncThunk(
  "login/user",
  async ({ email, password }) => {
    const res = await axios
      .post("https://api.escuelajs.co/api/v1/auth/login", { email, password })
      .then((res) => localStorage.setItem("userToken", res.data.access_token));

    return res;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userlogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userlogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(userlogin.rejected, (state) => {
      state.error = true;
    });
  },
});

export default userSlice.reducer;

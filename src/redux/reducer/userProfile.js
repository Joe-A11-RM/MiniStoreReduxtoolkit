import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getuserdata = createAsyncThunk("profile/user", async () => {
  const res = await axios
    .get("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => error.message);
  return res;
});

export const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    userData: {},
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getuserdata.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getuserdata.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(getuserdata.rejected, (state) => {
      state.error = true;
    });
  },
});
export default userProfileSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
import { RegisterUserDto } from "./dto/registerUser.dto";
import { useEffect } from "react";

const user = localStorage.getItem("user");
const initialState = {
  user: user ? user : "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
//register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserDto, thunkAPI) => {
    try {
      console.log("auth slice");
      return await authService.register(user);
    } catch (err) {
      const message: string = err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: any, thunkAPI) => {
    console.log(user);
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "false";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = JSON.stringify(action.payload!);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;

        state.user = "";
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;

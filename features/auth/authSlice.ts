import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
import { RegisterUserDto } from "./dto/registerUser.dto";
const initialState = {
  user: "Brad",
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
      const message = err.toString();
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
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;

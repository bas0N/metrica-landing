import { RegisterUserDto } from "./dto/registerUser.dto";
import axios from "axios";
const API_URL = "";

export const register = async (user: RegisterUserDto) => {
  console.log(user);
  console.log("auth service -> register");
  const response = await axios.post(
    "http://localhost:3001/auth/register",
    user
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const authService = { register };

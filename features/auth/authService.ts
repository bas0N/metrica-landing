import { RegisterUserDto } from "./dto/registerUser.dto";
import axios from "axios";
const API_URL = "";

export const register = async (user: RegisterUserDto) => {
  console.log(user);
  console.log("auth service -> register");
  const response = await axios.post(
    "http://localhost:3000/auth/register",
    user
  );
  console.log("response axios:");
  console.log(response.status);
  console.log(response.data);
};

export const authService = { register };

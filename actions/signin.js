import axios from "axios";
import { toast } from "sonner";

export async function signin({ email, password, role }) {
  try {
    const res = await axios.post(`http://localhost:5012/api/${role.toLowerCase()}/login`, {
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(res.data.data));
    localStorage.setItem("userRole", JSON.stringify(role));
  } catch (error) {
    console.error(error);
    toast.error("Email or password is incorrect");
    throw error;
  }
}
